"use server";

import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";
import type { QuoteState } from "@/lib/quote-options";

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB
const ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  try {
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const zip = String(formData.get("zip") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const company = String(formData.get("company") || "").trim(); // honeypot

    if (company) return { ok: true, message: "Thanks — we'll be in touch." };
    if (!name || (!phone && !email) || !message) {
      return { ok: false, message: "Please include your name, a way to reach you, and a few details." };
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    const photos = formData.getAll("photos");
    for (const p of photos) {
      if (!(p instanceof File)) continue;
      if (!p.size) continue;
      if (p.size > MAX_FILE_SIZE) {
        return { ok: false, message: `Photo "${p.name}" is too large (max 8MB).` };
      }
      if (p.type && !ALLOWED_MIME.includes(p.type)) {
        return { ok: false, message: `Photo "${p.name}" is not a supported image type.` };
      }
      const buf = Buffer.from(await p.arrayBuffer());
      attachments.push({ filename: p.name || "photo.jpg", content: buf });
    }

    const subject = `New Quote Request — ${service || "General"} — ${name}`;
    const html = `
      <h2>New Quote Request from thehaulteam.com</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "(none provided)")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || "(none provided)")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "(unspecified)")}</p>
      <p><strong>ZIP:</strong> ${escapeHtml(zip || "(none provided)")}</p>
      <p><strong>Details:</strong></p>
      <pre style="font-family:inherit;white-space:pre-wrap">${escapeHtml(message)}</pre>
      <p><strong>Photos attached:</strong> ${attachments.length}</p>
    `;

    const to = process.env.QUOTE_TO_EMAIL || "haulteam2022@gmail.com";
    const from = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: `The Haul Team <${from}>`,
        to: [to],
        replyTo: email || undefined,
        subject,
        html,
        attachments: attachments.map((a) => ({ filename: a.filename, content: a.content })),
      });
      if (error) {
        await logFallback({ name, phone, email, service, zip, message, photoCount: attachments.length, error: String(error) });
        return { ok: false, message: "Something went wrong sending your message. Please call us at (737) 610-0113." };
      }
    } else {
      await logFallback({ name, phone, email, service, zip, message, photoCount: attachments.length });
    }

    return { ok: true, message: "Got it — we'll text or call you within an hour." };
  } catch (e) {
    return { ok: false, message: "Something went wrong. Please call us at (737) 610-0113." };
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function logFallback(data: Record<string, unknown>) {
  try {
    const file = path.join("/tmp", "thehaulteam-quote-fallback.log");
    const line = `[${new Date().toISOString()}] ${JSON.stringify(data)}\n`;
    await fs.appendFile(file, line, "utf8");
  } catch {
    // best-effort
  }
}


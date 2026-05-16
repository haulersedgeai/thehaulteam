import Link from "next/link";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-ink/10 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)] lg:hidden">
      <a href={`tel:${SITE.phoneRaw}`} className="flex flex-col items-center gap-1 py-3 text-xs font-bold text-ink">
        <Phone className="h-5 w-5 text-brand" />
        Call
      </a>
      <a href={`sms:${SITE.smsRaw}`} className="flex flex-col items-center gap-1 border-x border-ink/10 py-3 text-xs font-bold text-ink">
        <MessageSquare className="h-5 w-5 text-brand" />
        Text
      </a>
      <Link href="/get-a-quote" className="flex flex-col items-center gap-1 py-3 text-xs font-bold text-white bg-brand">
        <FileText className="h-5 w-5" />
        Quote
      </Link>
    </div>
  );
}

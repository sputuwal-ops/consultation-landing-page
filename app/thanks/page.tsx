export { metadata } from "@/app/thank-you/page";

import ThankYouPage from "@/app/thank-you/page";
import { MetaLeadEvent } from "./MetaLeadEvent";

export default function ThanksPage() {
  return (
    <>
      <MetaLeadEvent />
      <ThankYouPage />
    </>
  );
}

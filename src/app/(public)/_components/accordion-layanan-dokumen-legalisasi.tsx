import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getServiceWithTranslationsByCategories } from "@/data/services";
import { getLocale } from "next-intl/server";
import { AccordionContentLayanan } from "./accordion-content-layanan";

export async function AccordionLayananDokumenLegalisasi() {
  const locale = await getLocale();

  const layananDokumenLegalisasi = await getServiceWithTranslationsByCategories(
    locale,
    ["suket", "legalisasi"]
  );

  return (
    <Accordion type="single" collapsible className="w-full">
      {layananDokumenLegalisasi.map((layanan) => (
        <AccordionItem key={layanan.id} value={layanan.name}>
          <AccordionTrigger className="text-start">
            {layanan.tname || layanan.name}
          </AccordionTrigger>
          {/* <AccordionContent>{tl(`${key}.description`)}</AccordionContent> */}
          <AccordionContentLayanan tkey={layanan.id} />
        </AccordionItem>
      ))}
    </Accordion>
  );
}

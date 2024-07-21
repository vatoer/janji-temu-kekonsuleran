import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export function AccordionLayananDokumenLegalisasi() {
  const tl = useTranslations("Layanan.dokumenLegalisasi");
  const keys = [
    "legalisasi",
    "certificatDeCoutume",
    "suketPencatatanPernikahan",
    "suketPencatatanPerceraian",
    "suketKematianBawaJenazahKeIndonesia",
    "suketKematian",
    "legalisasiSuratKuasa",
    "suketMembawaBarangPindahan",
    "suketMembawaAbuJenazah",
    "suketPenjelasanNama",
    "legalisasiDokumenPrancis",
    "permohonanLainnya",
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {keys.map((key) => (
        <AccordionItem key={key} value={key}>
          <AccordionTrigger className="text-start">
            {tl(`${key}.title`)}
          </AccordionTrigger>
          <AccordionContent>{tl(`${key}.description`)}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

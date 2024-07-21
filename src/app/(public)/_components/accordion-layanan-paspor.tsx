import getPassportServices from "@/actions/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getLocale, getTranslations } from "next-intl/server";

export async function AccordionLayananPaspor() {
  const tl = await getTranslations("Layanan.paspor");
  const locale = await getLocale();
  console.log({ tl, locale });
  const passportServices = await getPassportServices(locale);

  if (!passportServices.success) {
    return <div>Failed to load data</div>;
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {passportServices.data.map((service) => (
        <AccordionItem key={service.id} value={service.id}>
          <AccordionTrigger className="text-start">
            {service.tname || service.name}
          </AccordionTrigger>
          <AccordionContent>
            {service.tdescription || service.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

import { AccordionContent } from "@/components/ui/accordion";

interface AccordionItemLayananProps {
  content: string;
}
export const AccordionItemLayanan = ({
  content,
}: AccordionItemLayananProps) => {
  return <AccordionContent>{content}</AccordionContent>;
};

export default AccordionItemLayanan;

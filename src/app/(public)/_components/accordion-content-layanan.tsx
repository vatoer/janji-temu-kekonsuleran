import { getMdxContent } from "@/actions/mdx";
import { AccordionContent } from "@/components/ui/accordion";

interface AccordionContentLayananProps {
  tkey: string;
}
export const AccordionContentLayanan = async ({
  tkey,
}: AccordionContentLayananProps) => {
  // const [content, setContent] = useState("");
  // useEffect(() => {
  //   const fetchingMDX = async () => {
  //     const { content } = await getMdxContent("public", "layanan");
  //     //console.log(content);
  //   };
  //   fetchingMDX();
  // }, []);
  const content = await getMdxContent("en", "layanan");
  //console.log(content);
  //return content;
  return <AccordionContent>{content.content}</AccordionContent>;
};

export default AccordionContentLayanan;

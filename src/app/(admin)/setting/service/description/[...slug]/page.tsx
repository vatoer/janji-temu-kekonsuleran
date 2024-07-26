import Tiptap from "@/components/editor/tiptap";

const ServiceDescriptionPage = ({ params }: { params: { slug: string[] } }) => {
  const serviceId = params.slug[0];
  const locale = params.slug[1] || "en";

  // get string description from serviceId and locale

  return (
    <div>
      <h1>{params.slug.join("/")}</h1>
      <div className="bg-gray-100 m-2 py-2">
        <Tiptap />
      </div>
    </div>
  );
};

export default ServiceDescriptionPage;

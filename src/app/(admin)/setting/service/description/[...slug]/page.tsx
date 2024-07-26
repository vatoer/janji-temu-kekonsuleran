import { getServiceDescription } from "@/data/service-description";
import TiptapContainer from "../_components/tiptap-container";

const ServiceDescriptionPage = async ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const serviceId = params.slug[0];
  const language = params.slug[1] || "en";

  // get string description from serviceId and language
  // on server you can access directily from /src/data/service-description
  const serviceDescription = await getServiceDescription(serviceId, language);

  if (!serviceDescription) {
    return <div>Not found</div>;
  }

  const { description } = serviceDescription;

  return (
    <div>
      <h1>{params.slug.join("/")}</h1>
      <div className="bg-gray-100 m-2 py-2">
        <TiptapContainer
          language={language}
          serviceId={serviceId}
          initialContent={description ?? undefined}
        />
      </div>
    </div>
  );
};

export default ServiceDescriptionPage;

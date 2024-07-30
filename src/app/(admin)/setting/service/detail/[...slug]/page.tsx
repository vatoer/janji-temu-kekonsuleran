const ServiceDetailPage = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  const serviceId = slug[0];
  const language = slug[1] || "id";
  console.log(serviceId, language);
  return (
    <div>
      <h1>Service Detail Page</h1>
    </div>
  );
};

export default ServiceDetailPage;

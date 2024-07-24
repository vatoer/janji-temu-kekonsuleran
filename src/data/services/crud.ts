import { dbAppointment } from "@/lib/db-appointment";

const upsertName = async (
  serviceId: string,
  language: string,
  name: string
) => {
  try {
    const upsert = await dbAppointment.serviceTranslation.upsert({
      where: {
        serviceId_language: {
          serviceId,
          language,
        },
      },
      create: {
        name: name,
        //description: "description",
        serviceId: serviceId,
        language: language,
      },
      update: {
        name: "name",
        updatedAt: new Date(),
      },
    });
    return upsert;
  } catch (error) {
    console.error("[SERVICE-upsertName] Failed :", error);
    throw new Error("Failed to save data");
  }
};

// description ONLY can be updated if it already exists
const updateDescription = async (
  serviceId: string,
  language: string,
  description: string
) => {
  try {
    const updated = await dbAppointment.serviceTranslation.update({
      where: {
        serviceId_language: {
          serviceId,
          language,
        },
      },
      data: {
        description: description,
        updatedAt: new Date(),
      },
    });
    return updated;
  } catch (error) {
    console.error("[SERVICE-updateDescription] Failed :", error);
    throw new Error("Failed to save data");
  }
};

export default upsertName;

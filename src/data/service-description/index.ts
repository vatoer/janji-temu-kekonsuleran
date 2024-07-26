"use server";

import { dbAppointment } from "@/lib/db-appointment";

export interface Description {
  serviceId: string;
  translateTo: string;
  text: string;
  user: string;
}
export const upsert = async (description: Description) => {
  try {
    const upsertServiceDescription =
      await dbAppointment.serviceDescription.upsert({
        where: {
          serviceId_language: {
            serviceId: description.serviceId,
            language: description.translateTo,
          },
        },
        create: {
          description: description.text,
          serviceId: description.serviceId,
          language: description.translateTo,
          createdAt: new Date(),
          createdBy: description.user,
        },
        update: {
          description: description.text,
          updatedAt: new Date(),
          updatedBy: description.user,
        },
      });
    return upsertServiceDescription;
  } catch (error) {
    console.error("Failed :", error);
    throw new Error("Failed to save data");
  }
};

export const getServiceDescription = async (
  serviceId: string,
  language: string
) => {
  try {
    const serviceDescription = await dbAppointment.serviceDescription.findFirst(
      {
        where: {
          serviceId: serviceId,
          language: language,
        },
      }
    );
    return serviceDescription;
  } catch (error) {
    console.error("Failed :", error);
    throw new Error("Failed to get data");
  }
};

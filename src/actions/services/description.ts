"use server";
import { auth } from "@/app/(auth)/auth";
import { Description, upsert } from "@/data/service-description";
import { ActionResponse } from "../response";

interface UpsertResult {
  serviceId: string;
  translateTo: string;
  status: string;
}

export interface InputDescription {
  serviceId: string;
  translateTo: string;
  text: string;
}

export const upsertDescription = async (
  description: InputDescription
): Promise<ActionResponse<UpsertResult>> => {
  const session = await auth();
  if (!session || !session.user) {
    return { success: false, error: "Unauthorized" };
  }

  const user = session.user.name!;

  if (description.text === "") {
    return { success: false, error: "Text cannot be empty" };
  } else {
    try {
      const data: Description = { ...description, user };
      const upsertServiceDescription = await upsert(data);
      return {
        success: true,
        data: {
          serviceId: description.serviceId,
          translateTo: description.translateTo,
          status: upsertServiceDescription.status,
        },
      };
    } catch (error) {
      console.error("Failed :", error);
      return { success: false, error: "Failed to save data" };
    }
  }
};

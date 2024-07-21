import { ActionResponse } from "@/actions/response";
import {
  getServiceWithTranslationsByCategory,
  ServiceWithTranslation,
} from "@/data/services";

const getPassportServices = async (
  locale: string
): Promise<ActionResponse<ServiceWithTranslation[]>> => {
  try {
    const data = await getServiceWithTranslationsByCategory(locale, "paspor");
    return { success: true, data: data };
  } catch (error) {
    console.error("Failed to save data:", error);
    return { success: false, error: "Failed to save data" };
  }
};

export default getPassportServices;

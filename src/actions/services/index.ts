"use server";
import { ActionResponse } from "@/actions/response";
import {
  getServiceWithTranslations,
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

export const getServices = async (
  locale: string
): Promise<ActionResponse<ServiceWithTranslation[]>> => {
  try {
    const data = await getServiceWithTranslations(locale);
    return { success: true, data: data };
  } catch (error) {
    console.error("Failed :", error);
    return { success: false, error: "Failed to save data" };
  }
};

export default getPassportServices;

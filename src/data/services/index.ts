import { dbAppointment } from "@/lib/db-appointment";
export {
  getServiceWithTranslations,
  getServiceWithTranslationsByCategories,
  getServiceWithTranslationsByCategory,
} from "./raw-query";
export type { ServiceWithTranslation } from "./raw-query";

interface PassportService {
  id: string;
  name: string;
  description: string | null;
  serviceTranslation: {
    name: string;
    description: string | null;
  }[];
}

const getServicesByCategory = async (language: string, categoryId: string) => {
  try {
    const data = await dbAppointment.service.findMany({
      include: {
        category: true,
        serviceTranslation: {
          where: {
            language,
          },
        },
      },
      where: {
        categoryId,
      },
    });
    return data;
  } catch (error) {
    console.error("Failed :", error);
    throw new Error("Failed");
  }
};

export default getServicesByCategory;

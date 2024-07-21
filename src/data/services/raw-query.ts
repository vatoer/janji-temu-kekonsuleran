import { dbAppointment } from "@/lib/db-appointment";
import { Prisma } from "@prisma-db-appointment/client";

export interface ServiceWithTranslation {
  id: string;
  name: string;
  description: string | null;
  tname: string | null;
  tdescription: string | null;
}
export const getServiceWithTranslationsByCategory = async (
  language: string,
  categoryId: string
) => {
  const query = Prisma.sql`
  SELECT s.*, st.name AS tname, st.description AS tdescription
  FROM services s 
  LEFT JOIN ( 
      SELECT service_id, name, description 
      FROM service_translations 
      WHERE language = ${language}
  ) st ON s.id = st.service_id 
  WHERE s.category_id = ${categoryId}
  `;

  try {
    const data = await dbAppointment.$queryRaw<ServiceWithTranslation[]>(query);
    return data;
  } catch (error) {
    console.error("Failed :", error);
    throw new Error("Failed");
  }
};

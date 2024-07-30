import { dbAppointment } from "@/lib/db-appointment";
import { Prisma } from "@prisma-db-appointment/client";

export interface ServiceWithTranslation {
  id: string;
  name: string;
  status: string;
  description: string | null;
  tname: string | null;
  tdescription: string | null;
}

const baseQueryWithTranslation = (language: string) => Prisma.sql`
  SELECT s.*, st.name AS tname, st.description AS tdescription
  FROM services s 
  LEFT JOIN ( 
      SELECT service_id, name, description 
      FROM service_translations 
      WHERE language = ${language}
  ) st ON s.id = st.service_id 
`;

export const getServiceWithTranslationsByCategory = async (
  language: string,
  categoryId: string
) => {
  const query = Prisma.sql`
  ${baseQueryWithTranslation(language)}
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

export const getServiceWithTranslationsByCategories = async (
  language: string,
  categoryId: string[]
) => {
  // Map through categoryId to wrap each element in single quotes
  const formattedCategoryIds = categoryId.map((id) => `'${id}'`).join(",");
  console.log("[CATEGORIES]", formattedCategoryIds);
  const baseQuery = baseQueryWithTranslation(language);

  const query =
    baseQuery.text +
    `WHERE s.category_id in (${formattedCategoryIds}) ORDER BY s.display_order asc`;

  console.log(query);

  try {
    const data = await dbAppointment.$queryRawUnsafe<ServiceWithTranslation[]>(
      query,
      language
    );
    return data;
  } catch (error) {
    console.error("Failed :", error);
    throw new Error("Failed");
  }
};

export const getServiceWithTranslations = async (language: string) => {
  const query = Prisma.sql`
  ${baseQueryWithTranslation(language)}
  ORDER BY s.display_order asc
  `;

  try {
    const data = await dbAppointment.$queryRaw<ServiceWithTranslation[]>(query);
    return data;
  } catch (error) {
    console.error("Failed :", error);
    throw new Error("Failed");
  }
};

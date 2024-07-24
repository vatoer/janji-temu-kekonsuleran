import { updateDescription, upsertName } from "@/data/services/crud";
import { ActionResponse } from "../response";

interface UpsertResult {
  reference: string;
  translateTo: string;
  text: string;
}
export const upsertTranslation = async ({
  reference,
  translateTo,
  text,
}: UpsertResult): Promise<ActionResponse<UpsertResult>> => {
  const { firstPart, rest: serviceId } = splitFirstAndRest(reference);

  if (text === "") {
    return { success: false, error: "Text cannot be empty" };
  }

  try {
    switch (firstPart) {
      case "name":
        const upsert = await upsertName(serviceId, translateTo, text);
        break;
      case "description":
        // Upsert description
        const update = await updateDescription(serviceId, translateTo, text);
        break;
      default:
        return { success: false, error: "Invalid reference" };
    }
    return { success: true, data: { reference, translateTo, text } };
  } catch (error) {
    console.error("Failed :", error);
    return { success: false, error: "Failed to save data" };
  }
};

function splitFirstAndRest(input: string): { firstPart: string; rest: string } {
  const index = input.indexOf("-");
  if (index === -1) {
    return { firstPart: input, rest: "" }; // No '-' found, entire input is considered as firstPart
  }
  const firstPart = input.substring(0, index);
  const rest = input.substring(index + 1);
  return { firstPart, rest };
}

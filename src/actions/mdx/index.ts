import Footnote from "@/components/mdx/footnote";
import Group from "@/components/mdx/group";
import ItemSyarat from "@/components/mdx/item-syarat";
import Note from "@/components/mdx/note";
import { GroupSyarat } from "@components/mdx/group-syarat";
import { Syarat } from "@components/mdx/syarat";
import { readFileSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
const FOLDER_PATH = path.join(process.cwd(), "mdx");

export const getMdxContent = async (locale: string, fileName: string) => {
  //const filePath = path.join(FOLDER_PATH, locale, `${fileName}.mdx`);
  const filePath = path.join(
    FOLDER_PATH,
    "id",
    `layanan.dokumenlegalisasi.legalisasi.mdx`
  );
  const fileContent = readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
    components: {
      Syarat,
      GroupSyarat,
      Group,
      ItemSyarat,
      Footnote,
      Note,
    },
  });

  return {
    met: { ...frontmatter, fileName },
    content,
  };
};

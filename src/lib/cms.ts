import { Client } from "@notionhq/client";

export const cms = new Client({
  auth: process.env.NOTION_KEY,
});

import matter from "gray-matter";
import { NotionToMarkdown } from "notion-to-md";
import { remark } from "remark";
import html from "remark-html";
import { cms } from "../cms";
import { getPageMetaData } from "../utils";
const n2m = new NotionToMarkdown({ notionClient: cms });

export const getSinglePost = async (slug: string) => {
  const response = await cms.databases.query({
    database_id: String(process.env.NOTION_DATABASE_ID),
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  const matterResult = matter(String(mdString.parent));
  const processedContent = await remark()
    .use(html, {
      // Add configuration object for the `remark-html` plugin
      handlers: {
        // Define custom handler for `html` nodes
        html(h, node) {
          if (node.tagName === "a") {
            // Check if the node is an anchor element
            node.properties = node.properties || {};
            node.properties.target = "_blank"; // Set the `target` attribute to `_blank`
          }
          return h(node.position, node.tagName, node.properties, node.children);
        },
      },
    })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    metadata,
    markdown: contentHtml,
  };
};

import { cms } from "../cms";
import { getPageMetaData } from "../utils";

export async function getPosts(lang: string = "en") {
  const posts = await cms.databases.query({
    database_id: String(process.env.NOTION_DATABASE_ID),
    filter: {
      and: [
        {
          property: "Lang",
          multi_select: {
            contains: lang,
          },
        },
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });

  const allPosts = posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
}

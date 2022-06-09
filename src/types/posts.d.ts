import * as prismicT from '@prismicio/types';

export interface IPost {
  uid: string;
  title: string;
  subtitle: string;
  content: prismicT.RichTextField | null | undefined;
  publicationDate:
    | `${number}-${number}-${number}`
    | `${number}-${number}-${number}T${number}:${number}:${number}+${number}`
    | null
    | undefined;
}

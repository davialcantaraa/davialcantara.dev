import * as prismicH from '@prismicio/helpers';
import { GetServerSideProps } from 'next';
import { Box, Text } from '../../../stitches.config';
import { createClient } from '../../services/prismic';
import { IPost } from '../../types/posts';

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  return (
    <Box limit="md">
      <Text type="title">Hello world</Text>
    </Box>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  previewData,
}: any) => {
  const client = createClient({ previewData });
  const { data, first_publication_date, uid } = await client.getByUID(
    'writing',
    params.uid,
  );

  const post = {
    uid,
    title: prismicH.asText(data.title),
    subtitle: prismicH.asText(data.subtitle),
    content: prismicH.asHTML(data.content),
    publicationDate: first_publication_date,
  };

  return {
    props: {
      post,
    },
  };
};

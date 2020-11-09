// Next Components
import Head from 'next/head';

// Components
import Layout from '../../components/Layout';
import Date from '../../components/Date';

// Util Functions
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({ postData }) => {
  const { title, id, date } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      {title}
      <br />
      {id}
      <br />
      <Date dateString={date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;

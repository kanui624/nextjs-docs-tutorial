// Next Components
import Head from 'next/head';

// Next Types
import { GetStaticProps, GetStaticPaths } from 'next';

// Components
import Layout from '../../components/Layout';
import Date from '../../components/Date';

// Util Functions
import { getAllPostIds, getPostData } from '../../lib/posts';

// CSS
import utilStyles from '../../styles/utils.module.css';

const Post = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => {
  const { title, contentHtml, date } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default Post;

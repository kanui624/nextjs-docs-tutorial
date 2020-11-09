// Next Components
import Head from 'next/head';

// Components
import Layout from '../../components/Layout';
import Date from '../../components/Date';

// Util Functions
import { getAllPostIds, getPostData } from '../../lib/posts';

// CSS
import utilStyles from '../../styles/utils.module.css';

const Post = ({ postData }) => {
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

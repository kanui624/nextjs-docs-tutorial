// Components
import Layouts from '../../components/Layouts';

// Util Functions
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({ postData }) => {
  const { title, id, date } = postData;
  return (
    <Layouts>
      {title}
      <br />
      {id}
      <br />
      {date}
    </Layouts>
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
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;

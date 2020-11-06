import Link from 'next/link';
import Head from 'next/head';

const firstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default firstPost;

// If you need to link to an external page outside the Next.js app, just use an <a> tag without Link. If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.

// Next.js does code splitting automatically, so each page only loads what’s necessary for that page.

// Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

// in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!

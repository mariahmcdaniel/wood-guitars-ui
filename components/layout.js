import Head from 'next/head';
import Link from 'next/link';
import Nav from './nav';

// const name = 'Eric Wood | Master Luthier';

export const siteTitle = 'Eric-Wood-Guitars';

export default function Layout({ children, home }) {
  return (
     <div >
      <Head>
        <Link rel="icon" href="/favicon.ico" />
        {/* <meta
          name="description"
          content=""
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <Nav />
      <div className="container self-center mb-40">
      
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
      </div>
      </div>
  );
}
import Head from 'next/head';
import Link from 'next/link';
import Nav from './nav';


export const siteTitle = 'Eric-Wood-Guitars';

export default function Layout({ children }) {
  return (
     <div >
      <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Eric Wood Guitars</title>

        <Link rel="icon" href="/favicon.ico" />
       
      </Head>
      <Nav />
      <div>
      
      <main>{children}</main>

      </div>
      </div>
  );
}
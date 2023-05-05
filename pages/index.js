import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import utilStyles from '@/styles/utils.module.css'
import styled from "styled-components";

const inter = Inter({ subsets: ['latin'] })

const H1 = styled.h1`
font-size: clamp(1.4rem, 4vw, 1.8rem);
color: #56765D;
display: flex;
justify-content:center;
padding: calc(10px + 2vw);
text-align: center;
`; 

export default function Home() {
  return (
    <Layout home>
    <div>
      <div>
      <H1><span>Eric Wood</span>&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp; <span className={utilStyles.master}>Master Luthier</span></H1>
    </div>        
    <div style={{ [ "background-image" ]: "url(/images/woodGrain.jpg)" , ["min-height"]: "800px" }}>
      <div style={{ [ "background-color" ]: "rgba(0, 0, 0, 0.6)" }}>
        <div>
          <div>
            <Image 
              priority
              src="/images/parlor.png"
              className="mb-10 justify-center self-center"
              height={200}
              width={200}
              alt=""
            />
            <h4 className="mb-6 p-4 text-xl font-semibold">Happiness is beneficial for the body, but it is grief that develops the powers of the mind. The voyage of discovery is not in seeking new landscapes but in having new eyes. Love is a reciprocal torture. If a little dreaming is dangerous, the cure for it is not to dream less but to dream more, to dream all the time.</h4>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light">
              - Marcel Proust {' '}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  </Layout>
  )
}

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

const Div = styled.div`
display: flex;
flex-direction: column;
align-items:center;
padding: 20px;
`
const H4 = styled.h4`
margin-top: 10px;
margin-bottom: 10px;
color:#D9E3DB;
text-align: center;
`

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
          <Div>
            <Image 
              priority
              src="/images/parlor.png"
              height={368}
              width={200}
              alt=""
            />
            <H4>Happiness is beneficial for the body, but it is grief that develops the powers of the mind. The voyage of discovery is not in seeking new landscapes but in having new eyes. Love is a reciprocal torture. If a little dreaming is dangerous, the cure for it is not to dream less but to dream more, to dream all the time. - Marcel Proust</H4>
          </Div>
        </div>
      </div>
    </div>
    </div>
    
  </Layout>
  )
}

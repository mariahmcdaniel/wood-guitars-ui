import Layout from "@/components/layout"
import styled from "styled-components";

const H1 = styled.h1`
font-size: clamp(1.4rem, 4vw, 1.8rem);
color: #E6FCD6;
display: flex;
justify-content:center;
padding: calc(10px + 2vw);
text-align: center;
`; 

const Paragraph = styled.p`
display: flex;
justify-content: center;
padding:30px;
border: 2px solid #B4D3BA;
font-size: clamp(.8rem, 4vw, 1.2rem);
text-align: center;
`

export default function Order(){
  return(
    <Layout>
      <div>
      <H1>Purchase a custom instrument</H1>
      </div>
      <section>
      <Paragraph>While the ordering system is currently being built- please reach out via e-mail (ericwood208@gmail.com) or instagram (@ericwoodguitars) for more information about purchasing an instrument.</Paragraph>
      </section>
    </Layout>
  )
}
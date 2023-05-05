import Layout from "@/components/layout"
import Image from "next/image"
import styled from "styled-components";

const H1 = styled.h1`
font-size: clamp(1.4rem, 4vw, 1.8rem);
color: #56765D;
display: flex;
justify-content:center;
padding: calc(10px + 2vw);
text-align: center;
`; 

export default function Info(){
  return(
    <Layout>
      <div>
      <H1>About Me</H1>
      <Image 
        priority
        src="/images/ericPhoto.jpg"
        className="mb-10 self-center"
        height={553}
        width={558}
        alt=""
              />
      <div className="self-center p-14 bg-yellow-700 bg-opacity-20">
      <h2 className="self-center mb-5">my bio...</h2>
      <h2 className="self-center mb-5">How I started building:</h2>
      <h2 className="self-center">other interests:</h2>
      </div>
      </div>
    </Layout>
  )
}
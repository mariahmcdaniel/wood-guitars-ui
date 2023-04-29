import Layout from "@/components/layout"
import Image from "next/image"

export default function Info(){
  return(
    <Layout>
      <div className="flex flex-col justify-center">
      <h1 className="self-center text-7xl text-center bg-yellow-700 bg-opacity-30 mb-10">About Me</h1>
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
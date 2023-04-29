import Link from "next/link";
import Script from "next/script";
import Layout from "@/components/layout";
import Image from "next/image";

export default function GalleryHome(){
  return (
    <Layout>
      <div className="flex flex-col">
        <h1 className="self-center text-7xl bg-yellow-700 bg-opacity-30 mb-10 p-2">Gallery</h1>
      </div>
      <section className="flex flex-col">
      <p className="flex flex-col mb-20 self-center rounded-lg ring-2 ring-green-500 p-5 ml-14 text-center text-2xl bg-green-700 bg-opacity-20">A sampling of completed instruments and a glimpse into the build process.</p>
      </section>
      <div className="flex content-center">
      <Image
        src="/images/birchparlor.jpg"
        className="mb-3 justify-self-center"
        height={600}
        width={600}
        alt="birch parlor"
      />
      <p className="self-center mb-5 text-lg">Parlor guitar made from flamed birch wood with a finger board inlaid with hand-cut mother of pearl and abalone featuring lily of the valley flowers</p>

      </div>

    </Layout>
  ); 
}
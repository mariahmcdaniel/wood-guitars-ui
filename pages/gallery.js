import Layout from "@/components/layout";
import Image from "next/image";
// import axios from 'axios';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import ClientOnly from "@/components/ClientOnly";
import CompletedProjects from "@/components/CompletedProjects";
import styled from "styled-components";

// function fetchDate(d) {
//   const newDate = new Date(d);

//   const day = newDate.getDate();
//   const month = newDate.getMonth();
//   const year = newDate.getFullYear();

//   return [day, month, year];
// };

const H1 = styled.h1`
font-size: clamp(1.8rem, 4vw, 2.7rem);
color:  #E6FCD6;
display: flex;
justify-content:center;
padding: calc(10px + 2vw);
text-align: center;
`; 

const P = styled.p`
display:flex;
justify-content: center;
color: rgb(13, 69, 39);
`

export default function GalleryHome() {

  return (
    <Layout>
      <H1>Instrument Gallery</H1>
      <P>A selection of guitars built by Eric Wood</P>
      <ClientOnly>
        <CompletedProjects />
      </ClientOnly>
    </Layout>
  );
  
}




// const GalleryHome = ( {completedProjects, error} ) => {
//   if (error) {
//     return <div>An error occured: {error.message}</div>;
//   }
//   return (
//     <Layout>
//       <div className="flex flex-col">
//         <h1 className="self-center text-7xl bg-yellow-700 bg-opacity-30 mb-10 p-2">Project Gallery</h1>
//       </div>
//       <section className="flex flex-col">
//       <p className="flex flex-col mb-20 self-center rounded-lg ring-2 ring-green-500 p-5 ml-14 text-center text-2xl bg-green-700 bg-opacity-20">A sampling of completed instruments and a glimpse into the build process.</p>
//       </section>
//       <div className="flex content-center">
//         {completedProjects.data.map(completedProject => (
//           <div key={completedProject.id}>
//           <h3 key={completedProject.id}>{completedProject.attributes.name}</h3>
//           <Image src={`/images/${completedProject.attributes.src}`} height={500} width={500} alt={completedProject.attributes.name} />
//           <p>{completedProject.attributes.description}</p>
//           </div>
//         ))}
//       </div>

//     </Layout>
//   ); 
// };

// GalleryHome.getInitialProps = async ctx => {
//   try{
//     const res = await axios.get("http://localhost:1337/api/completed-projects?populate=*");
//     const completedProjects = res.data;
//     console.log(completedProjects);
//     return { completedProjects };
//   } catch (error){
//     return { error };
//   }
// };

// export default GalleryHome;
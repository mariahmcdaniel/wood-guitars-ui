import Layout from "@/components/layout";
import Image from "next/image";
// import axios from 'axios';
import { gql } from "@apollo/client";
import client from "../apollo-client";




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
import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const QUERY = gql`
  query AllCompletedProjects {
  completedProjects {
    data {
      attributes {
        name
        buildNumber
        date
        description
        src
      }
    }
  }
}
`;

export default function CompletedProjects() {
    const {data, loading, error} = useQuery(QUERY);

    if (loading) {
        return (
            <h2>Loading Data...</h2>
        );
    };

    if (error) {
        console.error(error);
        return (
            <h2>Sorry, there's been an error...</h2>
        );
    };

    const {completedProjects} = data;

    return (
        <>
            {completedProjects.map((project) => (
                <div key={project.data.attributes.name}>
                  <h3>{project.data.attributes.name}</h3>
                    <p>{project.data.attributes.description}</p>
                    <p>Build Number:{project.data.attributes.buildNumber} - Completed {project.data.attributes.date}</p>
                    <Image src={`/images/${project.data.attributes.src}`} height={500} width={500} alt={project.data.attributes.name}/>
                </div>
            ))}
        </>
    )
}
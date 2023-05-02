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
            {completedProjects.data.map((project) => (
                <div key={project.attributes.name}>
                  <h3>{project.attributes.name}</h3>
                    <p>{project.attributes.description}</p>
                    <p>Build Number:{project.attributes.buildNumber} - Completed {project.attributes.date}</p>
                    <Image src={`/images/${project.attributes.src}`} height={500} width={500} alt={project.attributes.name}/>
                </div>
            ))}
        </>
    )
}
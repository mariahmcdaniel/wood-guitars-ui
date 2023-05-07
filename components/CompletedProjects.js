import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid #B4D3BA;
margin: 30px;
padding: 20px;
`
const Paragraph = styled.p`
max-width: calc(80vw);
margin-top: 10px;
margin-bottom: 10px;
` 

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
                <Div key={project.attributes.name}>
                  <h3>{project.attributes.name}</h3>
                    <Paragraph>{project.attributes.description}</Paragraph>
                    <Paragraph>Build Number:{project.attributes.buildNumber} - Completed {project.attributes.date}</Paragraph>
                    <Image src={`/images/${project.attributes.src}`} height={500} width={500} alt={project.attributes.name}/>
                </Div>
            ))}
        </>
    )
}
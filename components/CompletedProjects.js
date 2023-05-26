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

const H3 = styled.h3`
color:#B4D3BA; 
font-size: 30px;
`

const QUERY = gql`
  query AllCompletedProjects {
  completedProjects {
    data {
      attributes {
        name
        build_number
        date
        description
        src
        images{
          data{
            attributes{
              url
            }
          }
        }
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
            <h2>Sorry, there has been an error...</h2>
        );
    };

    const {completedProjects} = data;

    return (
        <>
            {completedProjects.data.map((project) => (
                <Div key={project.attributes.name}>
                  <H3>{project.attributes.name}</H3>
                    <Paragraph>{project.attributes.description}</Paragraph>
                    <Paragraph>Build Number:{project.attributes.build_number} - Completed {project.attributes.date}</Paragraph>
                    <Image src={project.attributes.images.data.attributes.url} height={500} width={500} alt={project.attributes.name}/>
                </Div>
            ))}
        </>
    )
}
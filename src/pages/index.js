import * as React from "react";
import { Layout } from "../components/layout";
import { HeroGrid } from "../components/heroGrid";
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";


const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 30%;
  max-height: 100%;
`

const IndexPage = ({ data }) => {
  const heros = data.allDatoCmsHero.edges;
  let list = heros.map(hero => <HeroGrid key={hero.node.id} image={hero.node.image.url} title={hero.node.title} id={hero.node.id} />);
  return (
    <Layout PageTitle="Dota 2">
      <div className="Title">
        <h1>Willkommen zu DOTA2</h1>
      </div>
      {heros.forEach(hero => console.log(hero.node.id))}
      <Grid>
        {list}
      </Grid>
      {/* <h2>{data.allDatoCmsHero.edges[0].node.title}</h2>
      <img alt="Ancient Apparition" src={hero.image.url} />
      <div dangerouslySetInnerHTML={{ __html: hero.content }} /> */}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query test {
    allDatoCmsHero {
      edges {
        node {
          id
          image {
            url
          }
          title
        }
      }
    }
  }
`;

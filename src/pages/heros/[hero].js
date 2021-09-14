import * as React from "react";
import { Layout } from "../../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0,0,0,0.3);
  padding-bottom: 20px;
  width: 100vw;

  color: #fff;
  h1 {
    color:#fff;
  }
  .main {
    display: flex;
    max-width: 50%;
    align-items: center;
    
    img{
      padding-right: 20px;
      
    }
    h5{
      color: #a5e0f3
    } 
  }
`


const HeroDetails = ({ data, params }) => {

  const title =  params?.hero?.toUpperCase();
  const hero = data?.allDatoCmsHero?.edges?.find(
    (elem) => elem.node.title === title
  );
  console.log(hero, title);
  return title !== undefined && hero !== undefined &&(
    
  <Layout PageTitle={title}>
      <Container>
        <h1>{hero.node.title}</h1>
        <div className="main">
          <img src={hero.node.image.url} alt={title} />
          <div dangerouslySetInnerHTML={{ __html: hero.node.content }} />
        </div>
      </Container>
    </Layout>
  );
};

export default HeroDetails;

export const query = graphql`
  query hero ($title: String) {
    allDatoCmsHero (filter: {title: {eq: $title}})  {
      edges {
        node {
          id
          content
          image {
            url
          }
          title
        }
      }
    }
  }
`;

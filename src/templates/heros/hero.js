import * as React from "react";
import { Layout } from "../../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding-bottom: 20px;
  width: 100vw;

  color: #fff;
  h1 {
    color: #fff;
  }
  .main {
    display: flex;
    max-width: 50%;
    align-items: center;

    img {
      padding-right: 20px;
    }
    h5 {
      color: #a5e0f3;
    }
  }
`;

const HeroDetails = ({ data }) => {
  const hero = data?.datoCmsHero;

  return (
    hero !== undefined && (
      <Layout PageTitle={hero.title}>
        <Container>
          <h1>{hero.title}</h1>
          <div className="main">
            <img src={hero.image.url} alt={hero.title} />
            <div dangerouslySetInnerHTML={{ __html: hero.content }} />
          </div>
        </Container>
      </Layout>
    )
  );
};

export default HeroDetails;

export const query = graphql`
  query MyQuery($title: String!) {
  datoCmsHero(title: {eq: $title}) {
    title
    content
    image {
      url
    }
  }
}
`
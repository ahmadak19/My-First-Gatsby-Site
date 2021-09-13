import * as React from "react";
import { Layout } from "../components/layout";
import styled from "styled-components";

const Para = styled.div`
  color: #fff;
  max-width: 500px;
`;

const AboutPage = () => {
  return (
    <Layout PageTitle="About Me">
      <Para>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          fugiat error dolorem quam aut dicta esse. Ad iusto nihil distinctio
          fugit dolore, veniam modi dolor tempora. Ducimus deleniti amet error
          deserunt necessitatibus quo aperiam aliquam a, eveniet esse
          consectetur! Nihil, dolorum? Commodi, iure libero? Aliquid quod unde
          possimus voluptatum autem voluptates dolorem nulla in eius itaque ea
          facere eum, libero at tenetur molestiae atque id consectetur ratione
          totam deserunt harum dignissimos. Perspiciatis magnam rem qui
          voluptatibus? Commodi voluptates, quisquam eius nobis nesciunt
          voluptas sit ducimus nihil possimus quasi aliquid quae fuga dolorum,
          aperiam nam similique beatae perferendis veniam, numquam nostrum.
        </p>
      </Para>
    </Layout>
  );
};

export default AboutPage;

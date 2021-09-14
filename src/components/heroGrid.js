import * as React from "react";
import "../assets/scss/_heroContainer.scss";
import styled from "styled-components";
import { Link } from "gatsby";

const HeadingLink = styled(Link)`
    text-decoration: none;
`

export const HeroGrid = ({ image, title }) => { 
  const HeroGrid = styled.div`
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.8;
    height: 150px;
    width: 250px;
    border-radius: 10px;
    margin: 10px;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
      h3 {
        opacity: 1;
        transform: translateY(-50px);
      }
    }
    h3 {
      position: relative;
      top: 150px;
      transition: all 0.5s;
      color: #fff;
      opacity: 0;
      left: 4px;
    }
  `;

  return (
    <HeadingLink to={`/heros/${title}`} >
      <HeroGrid>
        <h3>{title}</h3>
      </HeroGrid>
    </HeadingLink>
  );
};

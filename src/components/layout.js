import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import "../assets/scss/_layout.scss";
import styled from 'styled-components'

const Container = styled.div`
    font-family: sans-serif;
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    

      .Title {
        color: #f9f2c1;
      }
    }
    
`


export const Layout = ({ PageTitle, children }) => {
  return (
      <div>
        <Header/>
        <Container>
          <title>{PageTitle}</title>
          <main>
              {children}
          </main>
        </Container>
        <Footer/>
      </div>
  );
};

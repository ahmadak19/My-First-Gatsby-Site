import * as React from "react";
import styled from 'styled-components';

const Foot = styled.footer`
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    padding-left: 3rem;
`

export const Footer = () => {
    return (
        <Foot>
            <p>	&copy;<span>2021</span></p>
        </Foot>
    )
}
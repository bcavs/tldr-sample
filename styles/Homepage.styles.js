import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0.5rem;
  background: #fff;
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
`;

export const TLDR = styled.h1`
  &:nth-child(2) {
    color: red;
  }
  &:nth-child(3) {
    color: yellow;
  }
  &:nth-child(4) {
    color: green;
  }
`;

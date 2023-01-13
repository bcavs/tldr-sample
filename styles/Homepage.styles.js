import styled, { css } from "styled-components";
import { media, typography } from "@utils";

export const HomepageContainer = styled.div`
  display: grid;
  min-height: 100vh;
  background: #0c111b;
  color: #fff;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 70vh 30vh;
  grid-template-areas:
    "content"
    "decorative";

  ${media.medium`
    grid-template-areas: "content decorative";
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;  
  `}
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  justify-self: center;
  padding: 0 1rem;
  position: relative;
  justify-content: center;
  height: 100%;
`;

export const TLDR = styled(typography.H1)`
  grid-area: logo;
  span:nth-child(1) {
    color: #33afff;
  }
  span:nth-child(2) {
    color: #e8c060;
  }
  span:nth-child(3) {
    color: #65c3ad;
  }
  span:nth-child(4) {
    color: #dc6b6b;
  }
`;

export const Headline = styled(typography.R2)`
  font-weight: bold;
`;

export const Subhead = styled(typography.R3)`
  font-weight: 100;
`;

export const FormControl = styled.div`
  grid-area: form;
  display: grid;
  margin-top: 1rem;
  position: relative;
  grid-template-areas: "input input" "helper button";
  gap: 0.5rem;
  grid-template-columns: 1fr auto;

  ${media.medium`
    grid-template-areas: "input button" "helper helper";
    grid-template-columns: 1fr auto;
  `}

  input {
    flex: 1;
    border-radius: 8px;
    padding: 1rem;
    grid-area: input;

    ${(props) =>
      props.hasError &&
      css`
        border: 1px solid red;
        /* background-color: #ffa6a6; */
      `}
  }
  button {
    padding: 1rem 2rem;
    background: linear-gradient(
      106.44deg,
      #ac32e4 7.53%,
      #7918f2 58.99%,
      #5a19ff 108.36%
    );
    border-radius: 8px;
    border: none;
    color: white;
    cursor: pointer;
    grid-area: button;
  }
`;

export const Subtext = styled(typography.P6a)`
  font-size: 12px;
  text-align: right;
  ${media.medium`
    text-align: left;
  `}
`;

export const Links = styled.div`
  padding: 1rem 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: unset;
  left: unset;

  ${media.medium`
    bottom: 0;
    left: 0;
    top: unset;
    right: unset;
  `}

  a {
    margin: 0 0.5rem;
  }
`;

export const ErrorText = styled(typography.P6a)`
  color: red;
  margin: 0;
  grid-area: helper;
`;

export const SuccessText = styled(typography.P6a)`
  color: green;
  margin: 0;
  grid-area: helper;
`;

export const ButtonText = styled(typography.P5a)`
  margin: 0;
  font-weight: bold;
`;

export const DecorativeContent = styled.div`
  grid-area: decorative;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 48px;
    ${media.medium`
      font-size: 64px;
    `}
  }
`;

export const Gradient = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    341.06deg,
    rgba(12, 17, 27, 0) 0%,
    #0c111b 59.73%,
    #0c111b 85.12%
  );

  ${media.medium`
    top: 0;
    background: linear-gradient(
      162.9deg,
      #0c111b 22.92%,
      rgba(12, 17, 27, 0) 50.52%,
      #0c111b 76.56%
    );  
  `}
`;

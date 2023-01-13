import styled from "styled-components";
import { media, typography } from "@utils";

export const HomepageContainer = styled.div`
  display: grid;
  min-height: 100vh;
  background: #0c111b;
  color: #fff;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-areas:
    "content"
    "decorative";

  ${media.medium`
    grid-template-areas: "content decorative";
    grid-template-columns: 60% 40%;
  `}
`;

export const CopyContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  justify-self: center;
  padding: 0 1rem;
`;

export const TLDR = styled(typography.H1)`
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
  display: flex;
  margin-top: 1rem;
  input {
    flex: 1;
    border-radius: 8px;
    padding: 1rem;
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
    margin: 0 0.5rem;
    color: white;
  }
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
  background-color: red;
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    341.06deg,
    rgba(12, 17, 27, 0) 0%,
    #0c111b 47.88%,
    #0c111b 85.12%
  );

  ${media.medium`
    background: linear-gradient(
      162.9deg,
      #0c111b 22.92%,
      rgba(12, 17, 27, 0) 50.52%,
      #0c111b 76.56%
    );  
  `}
`;

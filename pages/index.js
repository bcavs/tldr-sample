import React from "react";
import { HomepageStyles } from "@styles";
const {
  HomepageContainer,
  TLDR,
  CopyContent,
  DecorativeContent,
  Headline,
  Subhead,
  FormControl,
  ButtonText,
  Gradient,
} = HomepageStyles;

export default function Home() {
  return (
    <HomepageContainer>
      <CopyContent>
        <TLDR>
          <span>T</span>
          <span>L</span>
          <span>D</span>
          <span>R</span>
        </TLDR>
        <Headline>Byte sized news for busy techies</Headline>
        <Subhead>
          Free daily newsletter of the most interesting stories in startups 🚀,
          tech 📱, and programming 💻!
        </Subhead>
        <FormControl>
          <input type="email" />
          <button>
            <ButtonText>Subscribe</ButtonText>
          </button>
        </FormControl>
      </CopyContent>
      <DecorativeContent>
        <Gradient />
        <p>images</p>
      </DecorativeContent>
    </HomepageContainer>
  );
}

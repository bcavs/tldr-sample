import { Inter } from "@next/font/google";
import { HomepageStyles } from "@styles";
import { Nunito } from "@next/font/google";
const { HomepageContainer, TLDR } = HomepageStyles;

export default function Home() {
  console.log(HomepageStyles);
  return (
    <HomepageContainer>
      <TLDR>
        <span>T</span>
        <span>L</span>
        <span>D</span>
        <span>R</span>
      </TLDR>
    </HomepageContainer>
  );
}

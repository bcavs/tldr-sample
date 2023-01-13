import styled from "styled-components";
import { media } from "@utils";

const H1 = styled.h1`
  font-size: 3em;
  font-weight: 400;
  margin: 0.5rem 0;
`;

const H2 = styled.h2`
  font-size: 2em;
  font-weight: 400;
  margin: 0.5rem 0;
`;

const H3 = styled.h3`
  font-size: 1.5em;
  font-weight: 400;
  margin: 0.5rem 0;
`;

// const H4 = styled.h4`
//   font-size: 1.125em;
//   font-weight: 400;
// `;

// const H5 = styled.h5`
//   font-size: 1em;
//   font-weight: 400;
//   line-height: 1.1875rem;
// `;

// const H6 = styled.h5`
//   font-size: 0.875em;
//   font-weight: 400;
//   line-height: 1.0625rem;
// `;

// const P1a = styled.p`
//   font-weight: 400;
//   font-size: 2.5em;
// `;

// const P2a = styled.p`
//   font-size: 2em;
//   font-weight: 400;
// `;

// const P3a = styled.p`
//   font-size: 1.5em;
//   font-weight: 400;
// `;

// const P4a = styled.p`
//   font-size: 1.125em;
//   line-height: 1.125rem;
//   font-weight: 400;
// `;

const P5a = styled.p`
  font-size: 1em;
  font-weight: 400;
`;

const P6a = styled.p`
  font-size: 0.875em;
  font-weight: 400;
`;

// const R1 = styled(H1)`
//   font-size: 2em;

//   ${media.medium`
// 		font-size: 2.5em;
//     `}
// `;
const R2 = styled(H2)`
  font-size: 1.25em;

  ${media.medium`
		font-size: 2em;
    `}
`;

const R3 = styled(H3)`
  font-size: 1em;

  ${media.medium`
		font-size: 1.5em;
    `}
`;

// const R4 = styled(H4)`
//   font-size: 0.725em;

//   ${media.medium`
// 		font-size: 1.125em;
//     `}
// `;

const typography = {
  H1,
  //   H2,
  //   H3,
  //   H4,
  //   H5,
  //   H6,
  //   P1a,
  //   P2a,
  //   P3a,
  //   P4a,
  P5a,
  P6a,
  //   R1,
  R2,
  R3,
  //   R4,
};

export default { ...typography };

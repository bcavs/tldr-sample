import styled, { keyframes } from "styled-components";

const slideAnim = keyframes`
 from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .looper__innerList {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .looper__innerList[data-animate="true"] .looper__listInstance {
    animation: ${slideAnim} linear infinite;
  }

  .looper__listInstance {
    display: flex;
    height: max-content;
    flex-direction: column;
    animation: none;
  }
`;

import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  5% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
`;

export const ExperienciaContainer = styled.section`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  height: 10rem;
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
`;

export const ItemExperiencia = styled.div`
  /* border: 1px solid #f00; */
  scroll-snap-align: center;
  display: flex;
  width: 5rem;
  height: auto;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    animation: ${() => fadeInOut} 1s infinite; // Apply keyframes to the animation
  }

  img {
    width: 100px;
  }
`;

export const EventListTitle = styled.h2`
  color: #601f24;
  text-transform: uppercase;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;

import styled from "styled-components";

export const ButtonLink = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const Button = styled.button`
  text-transform: uppercase;
  padding: 0 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: all 0.3s;
  border: 1px solid #808080;

  &:hover {
    transition: all 0.3s;
    background-color: #ccc;
  }
`;

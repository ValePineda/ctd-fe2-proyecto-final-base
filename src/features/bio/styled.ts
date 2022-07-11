import styled, { css } from "styled-components";

interface IProps {
  nombre: string;
  id: string;
}

export const Button = styled.button<IProps>`
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.nombre === props.id
      ? css`
          border-radius: 5px;
          border: 1px solid darkgray;
          box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
          padding: 1rem;
          margin: 1rem;
          font-family: "Homer Simpson Revised", sans-serif;
          font-size: 1.4rem;
          background-color: #fdd835;
          color: whitesmoke;
          text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
            -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
            -2px 0px 0 #000000, 0px -2px 0 #000000;
        `
      : `
  border-radius: 5px;
  border: 1px solid darkgray;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 1rem;
  margin: 1rem;
  font-family: "Homer Simpson Revised", sans-serif;
  font-size: 1.4rem;
  `}
`;

export const ContainerBio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const BioImagen = styled.img`
  max-width: 200px;
  max-height: 300px;
  margin-bottom: 1rem;
`;

export const BioNombre = styled.h3`
  font-size: 2em;
  margin-bottom: 1rem;
`;

export const BioDescription = styled.p`
  font-size: 1.3em;
  width: 70%;
  margin: 1rem auto;
`;

export default { Button, ContainerBio, ContainerButtons, BioImagen, BioNombre, BioDescription };

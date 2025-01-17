import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import {
  Button,
  ContainerBio,
  ContainerButtons,
  BioImagen,
  BioNombre,
  BioDescription,
} from "./styled";

export const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <Button
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        nombre={nombre}
        id={bioActiva.id}
      >
        {nombre}
      </Button>
    ));
  };

  return (
    <ContainerBio>
      <ContainerButtons>{crearBotones()}</ContainerButtons>
      <div>
        <div>
          <BioImagen src={bioActiva.image} alt={bioActiva.nombre} />
        </div>
        <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescription>{bioActiva.descripcion}</BioDescription>
        </div>
      </div>
    </ContainerBio>
  );
};


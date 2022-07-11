import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, screen } from "../../../test-utils";
import { Cita } from "../Cita";
import { API_URL } from "../../../app/constants";

type APIResponse = [
  {
    character: string;
    characterDirection: string;
    image: string;
    quote: string;
  }
];

const mockedApiResponse: APIResponse = [
  {
    character: "Apu Nahasapeemapetilon",
    characterDirection: "Left",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    quote: "Thank you. Come again.",
  },
];

describe("Quote", () => {
  // Se utiliza la librería MSW para interceptar las peticiones
  // durante los tests y retornar mockedApiResponse después de 500ms

  const server = setupServer(
    rest.get<APIResponse>(API_URL, (req, res, ctx) => {
      return res(ctx.json(mockedApiResponse), ctx.delay(500));
    })
  );

  // Habilita el mock de la API antes de las pruebas.
  beforeAll(() => server.listen());

  // Restablece cualquier petición en tiempo de ejecución que podamos agregar durante las pruebas.
  afterEach(() => server.resetHandlers());

  // Deshabilita el mock de la API después de realizar las pruebas.
  afterAll(() => server.close());

  it("El componente Cita se debe renderizar correctamente sin datos", () => {
    render(<Cita />);

    const content = screen.getByText("No se encontro ninguna cita");
    expect(content).toBeInTheDocument();
  });

  it("Se debe obtener una cita al dar click en el boton 'Obtener cita aleatoria' ", async () => {
    render(<Cita />);

    const button = screen.getByText("Obtener cita aleatoria");
    fireEvent.click(button);

    const content = screen.findByText("Thank you. Come again.");
    expect(await content).toBeTruthy();
  });

  it("Se debe obtener una cita al ingresar un nombre del autor en el input dar click en el boton 'Obtener cita' ", async () => {
    render(<Cita />);

    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    fireEvent.change(input, { target: { value: "Apu" } });

    const button = screen.getByText(/Obtener cita/i);
    fireEvent.click(button);

    const content = screen.findByText("Thank you. Come again.");
    expect(await content).toBeTruthy();
  });

  it("Se debe limpiar el input al dar click en el boton 'Borrar' ", () => {
    render(<Cita />);

    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    fireEvent.change(input, { target: { value: "Apu" } });

    const button = screen.getByText("Borrar");
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});

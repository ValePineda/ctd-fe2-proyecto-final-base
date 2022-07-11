import { fireEvent, render, screen } from "@testing-library/react";
import Bio from "../Bio";

describe("Componente bio", () => {
  it("El componente bio se debe renderizar correctamente", () => {
    render(<Bio />);

    const button = screen.getByText("BART");

    expect(button).toBeInTheDocument();
  });

  it("Al dar click en el boton de otro personaje debería cambiar el nombre en la biografia", () => {
    render(<Bio />);

    const button = screen.getByText("HOMERO");
    fireEvent.click(button)
    const nameBio = screen.getByText("Homero Simpson");

    expect(nameBio).toBeInTheDocument();
  });
});

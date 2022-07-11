import { fireEvent, render, screen } from "@testing-library/react";
import { Noticias } from "../Noticias";

describe("Componente Noticias", () => {
  it("El componente bio se debe renderizar correctamente", () => {
    render(<Noticias />);

    const title = screen.getByText("Noticias de los Simpsons");

    expect(title).toBeInTheDocument();
  });
});

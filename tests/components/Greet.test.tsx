import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when mane is provided", () => {
    render(<Greet name="Sajjid" />);
    screen.debug();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Hello Sajjid/i);
  });

  it("should render login button when mane is not provided", () => {
    render(<Greet />);
    screen.debug();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("HomePage 테스트", () => {
  it("renders Page", () => {
    const { getByText } = render(<Home />);
    const linkElement = getByText(/Next.js Tailwind CSS/i);
    expect(linkElement).toBeInTheDocument();
  });
});

/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import FormPage from "./page";
import "@testing-library/jest-dom";

it("폼페이지 렌더링", () => {
  render(<FormPage />);
});

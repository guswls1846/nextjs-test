import React from "react";
import { render } from "@testing-library/react";
import Home from "@/app/page";
import SummaryPage from "@/app/summary/page";

describe("요약 페이지  테스트", () => {
  it("renders Page", () => {
    const { getByText } = render(<SummaryPage />);
  });
});

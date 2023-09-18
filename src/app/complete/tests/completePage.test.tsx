import React from "react";
import { render } from "@testing-library/react";
import CompletePage from "@/app/complete/page";

describe("결제 완료 페이지  테스트", () => {
  it("renders Page", () => {
    const { getByText } = render(<CompletePage />);
  });
});

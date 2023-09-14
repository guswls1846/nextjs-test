import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "@/app/counter";

describe("Counter 페이지 테스트", () => {
  it("카운터 페이지 렌더링", () => {
    render(<Counter />);
    const CounterElement = screen.getByTestId("counter");
    expect(CounterElement).toHaveTextContent("0");
  });
});

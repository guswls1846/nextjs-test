import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Counter from "@/app/counter/page";

describe("Counter 페이지 테스트", () => {
  it("카운터 페이지 렌더링", () => {
    render(<Counter />);
    const CounterElement = screen.getByTestId("counter");
    expect(CounterElement).toHaveTextContent("0");
  });

  it("마이너스 버튼", () => {
    render(<Counter />);
    const minusButton = screen.getByTestId("minus-button");
    expect(minusButton).toHaveTextContent("-");
  });

  it("플러스 버튼", () => {
    render(<Counter />);
    const plusButton = screen.getByTestId("plus-button");
    expect(plusButton).toHaveTextContent("+");
  });

  it('마이너스 버튼 클릭시, count -1 ',  ()=> {
    render(<Counter />);
    const minusButton = screen.getByTestId("minus-button");
    const CounterElement = screen.getByTestId("counter");
    fireEvent.click(minusButton);
    expect(CounterElement).toHaveTextContent("-1");
  });

  it('플러스 버튼 클릭시, count 1 ',  ()=> {
    render(<Counter />);
    const plusButton = screen.getByTestId("plus-button");
    const CounterElement = screen.getByTestId("counter");
    fireEvent.click(plusButton);
    expect(CounterElement).toHaveTextContent("1");
  });

});

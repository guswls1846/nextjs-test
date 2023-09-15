import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "@/app/counter/page";

describe("Counter 페이지 테스트", () => {
  const user = userEvent.setup();

  it("카운터 페이지 렌더링", () => {
    render(<Counter />);
    const CounterElement = screen.getByRole("heading");
    expect(CounterElement).toHaveTextContent("0");
  });

  it("마이너스 버튼", () => {
    render(<Counter />);
    const minusButton = screen.getByRole("button", { name: "-" });
    expect(minusButton).toHaveTextContent("-");
  });

  it("플러스 버튼", () => {
    render(<Counter />);
    const plusButton = screen.getByRole("button", { name: "+" });
    expect(plusButton).toHaveTextContent("+");
  });

  it("마이너스 버튼 클릭시, count -1 ", async () => {
    render(<Counter />);
    const minusButton = screen.getByRole("button", { name: "-" });
    const CounterElement = screen.getByRole("heading");
    await user.click(minusButton);
    expect(CounterElement).toHaveTextContent("-1");
  });

  it("플러스 버튼 클릭시, count 1 ", async () => {
    render(<Counter />);
    const plusButton = screen.getByRole("button", { name: "+" });
    const CounterElement = screen.getByRole("heading");
    await user.click(plusButton);
    expect(CounterElement).toHaveTextContent("1");
  });

  it("on/off 버튼 컬러는 파란색입니다. ", () => {
    render(<Counter />);
    const onOffButton = screen.getByRole("button", { name: "on/off" });
    expect(onOffButton).toHaveStyle("background-color: blue");
  });

  it("on/off 버튼 클릭시 +,- 버튼 disabled 속성 변경 ", async () => {
    render(<Counter />);
    const onOffButton = screen.getByRole("button", { name: "on/off" });
    const minusButton = screen.getByRole("button", { name: "-" });
    const plusButton = screen.getByRole("button", { name: "+" });
    await user.click(onOffButton);
    expect(minusButton).toBeDisabled();
    expect(plusButton).toBeDisabled();
  });
});

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SummaryPage from "@/app/summary/page";

test("주문 확인 체크 박스를 눌러야만 결제하기 버튼을 누를 수 있다", () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole("checkbox", {
    name: "주문 내역을 확인하고 결제에 동의합니다.",
  });
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  const button = screen.getByRole("button", { name: "결제하기" });
  expect(button).toBeEnabled();
});

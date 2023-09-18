import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SummaryPage from "@/app/summary/page";

test("체크박스와 버튼", () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole("checkbox", {
    name: "주문 내역을 확인하고 결제에 동의합니다.",
  });
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  const button = screen.getByRole("button", { name: "결제하기" });
});

import React from "react";
import { render } from "@testing-library/react";
import OrderPage from "@/app/order/page";

describe("주문 페이지  테스트", () => {
  it("renders Page", () => {
    const { getByText } = render(<OrderPage />);
  });
});

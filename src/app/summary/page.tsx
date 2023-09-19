"use client";
import React from "react";

const SummaryPage = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <form>
      <h1>주문 확인</h1>
      <input
        type="checkbox"
        id="confirm-checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="confirm-checkbox">
        주문 내역을 확인하고 결제에 동의합니다.
      </label>
      <br />
      <button type="submit" disabled={!isChecked}>
        결제하기
      </button>
    </form>
  );
};

export default SummaryPage;

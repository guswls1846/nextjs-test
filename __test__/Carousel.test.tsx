import React from "react";
import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Carousel } from "@/components/organism/Carousel";
import { useCarousel } from "@/components/organism/Carousel/hooks/useCarousel";

const items = [
  {
    imageUrl: "https://picsum.photos/id/1/200/300",
    altText: "Image 1",
    caption: "Caption 1",
  },
  {
    imageUrl: "https://picsum.photos/id/2/200/300",
    altText: "Image 2",
    caption: "Caption 2",
  },
  {
    imageUrl: "https://picsum.photos/id/3/200/300",
    altText: "Image 3",
    caption: "Caption 3",
  },
];

describe("Carousel 컴포넌트", () => {
  it("Carousel 컴포넌트 렌더링", () => {
    render(<Carousel items={items} />);
  });

  it("HandleNext에서 activeIndex를 증가시킵니다.", () => {
    const { result } = renderHook(() => useCarousel(items));

    act(() => {
      result.current.handleNext();
    });

    expect(result.current.activeIndex).toBe(1);
  });

  it("HandleNext3번 호출 시 activeIndex는 0", () => {
    const { result } = renderHook(() => useCarousel(items));

    act(() => {
      result.current.handleNext(); // 1
      result.current.handleNext(); // 2
      result.current.handleNext(); // 3
    });

    expect(result.current.activeIndex).toBe(0); // 0으로 되어야 합니다.
  });

  it("handlePrev에서 activeIndex를 감소시킵니다.", () => {
    const { result } = renderHook(() => useCarousel(items));

    act(() => {
      result.current.handlePrev();
    });

    expect(result.current.activeIndex).toBe(2);
  });

  it("'>' 버튼 클릭시 이미지 변경", async () => {
    render(<Carousel items={items} />);

    const nextButton = screen.getByText(">");

    await act(() => {
      userEvent.click(nextButton);

      waitFor(() => {
        const imageElement = screen.getByAltText("Image 2");
        expect(imageElement).toBeInTheDocument();

        const captionElement = screen.getByText("Caption 2");
        expect(captionElement).toBeInTheDocument();
      });
    });
  });

  it("'<' 버튼 클릭시 이미지 변경", async () => {
    render(<Carousel items={items} />);

    const prevButton = screen.getByText("<");
    await act(() => {
      userEvent.click(prevButton);

      waitFor(() => {
        const imageElement = screen.getByAltText("Image 3");
        expect(imageElement).toBeInTheDocument();

        const captionElement = screen.getByText("Caption 3");
        expect(captionElement).toBeInTheDocument();
      });
    });
  });
});

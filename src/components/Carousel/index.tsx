"use client";

import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import type { JSX } from "react";
import { NavigationButton } from "./components/NavigationButton";
import { PagenationButton } from "./components/PagenationButton";
import { useNavigation } from "./hooks/useNavigation";
import { usePagination } from "./hooks/usePagination";

type PropType = {
  children: JSX.Element[];
  options?: EmblaOptionsType;
};

export const Carousel = (props: PropType) => {
  const { children, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { activePageIndex, scrollSnaps, goToPage } = usePagination(emblaApi);

  const { goToNext, goToPrev } = useNavigation(emblaApi);

  return (
    <div className="@container flex flex-col gap-4">
      <div className="embla rounded-box" ref={emblaRef}>
        <div className="embla__container -ml-4">
          {children.map((element) => (
            <div key={element.key} className="embla__slide pl-4">
              <div className="relative grid h-128 w-full place-items-center">
                {element}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <NavigationButton navigaton="prev" onClick={goToPrev} />

        <div className="flex flex-wrap items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <PagenationButton
              // biome-ignore lint/suspicious/noArrayIndexKey:
              key={index}
              index={index}
              isActive={index === activePageIndex}
              onClick={goToPage}
            />
          ))}
        </div>

        <NavigationButton navigaton="next" onClick={goToNext} />
      </div>
    </div>
  );
};

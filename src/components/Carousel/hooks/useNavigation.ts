import type { EmblaCarouselType } from "embla-carousel";
import { useCallback } from "react";

export const useNavigation = (emblaApi: EmblaCarouselType | undefined) => {
  const goToNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const goToPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  return {
    goToNext,
    goToPrev,
  };
};

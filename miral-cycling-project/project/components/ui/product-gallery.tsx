'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';
import type { CarouselApi } from './carousel';

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  const slides = [...images];
  while (slides.length < 4) {
    slides.push(images[0]);
  }

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    api.on('select', () => setSelected(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {slides.map((src, idx) => (
            <CarouselItem key={idx} className="relative aspect-square">
              <Image src={src} alt={`Product image ${idx + 1}`} fill className="object-cover rounded-lg" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {slides.length > 1 && (
        <div className="flex gap-2 mt-4 justify-center">
          {slides.map((src, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`relative w-16 h-16 overflow-hidden rounded-md border-2 transition-colors ${
                selected === idx ? 'border-black' : 'border-transparent'
              }`}
            >
              <Image src={src} alt="thumbnail" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

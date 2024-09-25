'use client';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Heading } from './heading';
import { text } from '../lib/text';
import { Slider } from './slider';
import Image, { StaticImageData } from 'next/image';

type TestimonialsProps = {
  testimonials: {
    text: string;
    name: string;
    role: string;
    company: string;
    thumbnail: StaticImageData;
  }[];
};

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const slides = ref.current.querySelectorAll('.swiper-slide');

      gsap.effects.bubbleUp(slides, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      });
    }
  }, []);

  return (
    <div className="px-4">
      <Heading text={text.testimonials} />
      <div ref={ref} className="mt-12">
        <Slider>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full py-8 md:py-15 px-6 md:px-12 rounded-6 md:rounded-10 shadow-main border-1 border-orange-400"
              style={{
                maxWidth: 'min(80vw, 586px)',
              }}
            >
              <div>&quot;{testimonial.text}&quot;</div>
              <div className="flex gap-3 md:gap-5 mt-12">
                <div className="rounded-full min-w-12 w-12 h-12 md:w-15 md:h-15 row-span-2 overflow-hidden">
                  <Image
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="image-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-h6 uppercase">{testimonial.name}</div>
                  <div className="flex gap-1 flex-wrap text-body font-normal mt-2">
                    <div>{testimonial.role}</div>
                    <div>@ {testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

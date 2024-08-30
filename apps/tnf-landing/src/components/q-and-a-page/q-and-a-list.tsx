'use client';
import { qAndAData } from '../../lib/data/q-and-a';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { PlusSvg } from '@tnf-workspace/react-components';

export const QAndAList = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [openedSectionsIndexes, setOpenedSectionsIndexes] = useState<number[]>(
    []
  );
  const questionSectionsElementListRef = useRef<NodeListOf<Element> | null>(
    null
  );
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (!questionSectionsElementListRef.current) {
      questionSectionsElementListRef.current = document.querySelectorAll(
        '.tnf-question-section'
      );
    }

    Array.from(questionSectionsElementListRef.current).forEach(
      (panel, index) => {
        const iconElement = panel.querySelector('.tnf-question-icon');
        const answerElement = panel.querySelector('.tnf-answer');
        const tnfQuestionSectionFrame = panel.querySelector(
          '.tnf-question-section-frame'
        );
        const isOpened = openedSectionsIndexes.includes(index);

        if (iconElement) {
          gsap.to(iconElement, {
            rotate: isOpened ? 45 : 0,
            duration: isFirstRenderRef.current ? 0 : 1,
            ease: 'elastic.out(1, 0.4)',
          });
        }

        if (answerElement && tnfQuestionSectionFrame) {
          const tl = gsap.timeline();
          tl.to(
            answerElement,
            {
              height: isOpened ? 'auto' : 0,
              duration: isFirstRenderRef.current ? 0 : 0.35,
              ease: 'expo.inOut(1, 1)',
            },
            0
          );
          tl.to(
            answerElement,
            {
              opacity: isOpened ? 1 : 0,
              duration: isFirstRenderRef.current ? 0 : isOpened ? 0.5 : 0.35,
              ease: 'sine.inOut(1, 0.7)',
            },
            0
          );
          if (!isFirstRenderRef.current) {
            tl.to(
              tnfQuestionSectionFrame,
              {
                duration: 1,
                y: isOpened ? 0 : -10,
                x: isOpened ? 0 : 10,
                ease: 'elastic.out(2, 0.3)',
              },
              '0'
            );
          }
        }
      }
    );

    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
    }
  }, [openedSectionsIndexes.length]);

  useEffect(() => {
    gsap.effects.bubbleUp(ref.current?.querySelectorAll('section'));
  }, []);

  const handleSectionClick = (index: number) => {
    setOpenedSectionsIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <nav ref={ref} className="mt-15 flex flex-col gap-10">
      {qAndAData.map(({ answer, question }, index) => {
        const isOpened = openedSectionsIndexes.includes(index);

        return (
          <section
            key={index}
            className="relative tnf-question-section py-6*9 px-9*12"
          >
            <div className="bg-transparent absolute border-orange-400 border-1 rounded-4 w-full h-full top-0 left-0 pointer-events-none"></div>
            <div className="bg-transparent tnf-question-section-frame absolute border-orange-700 border-1 rounded-4 w-full h-full top-0 left-0 pointer-events-none translate-x-[10px] -translate-y-[10px]"></div>
            <h3
              role="button"
              tabIndex={0}
              aria-expanded={isOpened}
              aria-label={question}
              className="flex items-center gap-8"
              onClick={() => handleSectionClick(index)}
            >
              <div className="flex-1 text-[18px] md:text-[20px] font-bold">
                {question}
              </div>
              <PlusSvg
                className={`tnf-question-icon text-orange-600 w-6 h-6 md:w-10 md:h-10 ${
                  isOpened ? 'rotate-45' : 'rotate-0'
                }`}
              />
            </h3>
            <div
              className={`tnf-answer overflow-hidden text-[18px] md:text-[20px] ${
                isOpened ? 'h-auto' : 'h-0'
              }`}
            >
              <p className="pt-4">{answer}</p>
            </div>
          </section>
        );
      })}
    </nav>
  );
};

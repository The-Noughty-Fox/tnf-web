'use client';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { FormEvent, ReactElement, useEffect, useRef } from 'react';
import { text } from '../lib/text';
import { Button } from '@tnf-workspace/react-components';

type WriteUsProps = {
  controlText?: string;
  Icon?: ReactElement;
};

export const WriteUs = ({ Icon, controlText = 'Write us' }: WriteUsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerCn = clsx('max-w-[612px] w-full');
  const formTitleCn = clsx(
    'form-title text-[24px] font-semibold text-center flex items-center uppercase',
    'mb-6',
    'after:block after:w-3 after:h-3 after:rounded-full after:bg-primary',
    'before:block before:w-3 before:h-3 before:rounded-full before:bg-primary'
  );

  const handleSubmit = (submitEvent: FormEvent<HTMLFormElement>) => {
    submitEvent.preventDefault();
  };

  useEffect(() => {
    if (ref.current) {
      gsap.effects.bubbleUp(['.form-title', '.form-group', '.form-control'], {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      });
    }
  }, []);

  return (
    <div ref={ref} className={containerCn}>
      <div className={formTitleCn}>
        <span className="flex-1">{text.write_a_message}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{text.name}</label>
          <input
            maxLength={50}
            id="name"
            type="text"
            placeholder="Cristina Orbacaite"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{text.email}</label>
          <input id="email" type="email" placeholder="example@mail.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">{text.message}</label>
          <textarea
            maxLength={255}
            rows={10}
            id="message"
            placeholder={text.your_message}
            className="p-4"
          />
        </div>
        <div className="form-control flex justify-center mt-10">
          <Button text={controlText} size="small" Icon={Icon} />
        </div>
      </form>
    </div>
  );
};

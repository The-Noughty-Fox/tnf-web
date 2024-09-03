'use client';

import { Button } from '@tnf-workspace/react-components';
import { text } from '@tnf-workspace/ts-lib';
import { useRouter } from 'next/navigation';
import { pageRoutes } from '../lib/pageRoutes';

export const ContactUsBtn = () => {
  const { push } = useRouter();
  return (
    <Button
      text={text.contact_us}
      onClick={() => {
        push(pageRoutes.contactUs);
      }}
      size="small"
    />
  );
};

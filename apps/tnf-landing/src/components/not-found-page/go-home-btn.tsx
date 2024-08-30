'use client';
import { text } from '../../lib/text';
import { Button } from '@tnf-workspace/react-components';
import { useRouter } from 'next/navigation';
import { pageRoutes } from '../../lib/pageRoutes';

export const GoHomeBtn = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push(pageRoutes.home);
      }}
      text={text.go_home}
    />
  );
};

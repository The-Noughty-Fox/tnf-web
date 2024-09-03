'use client';
import {
  Button,
  NotFound as NotFoundComponent,
} from '@tnf-workspace/react-components';

type NotFoundProps = {};

export const NotFound = ({}: NotFoundProps) => {
  return (
    <NotFoundComponent
      goHomeControl={
        <Button
          text="Go Home"
          onClick={() => {
            window.location.href = import.meta.env.PUBLIC_HOME_PAGE;
          }}
        />
      }
    />
  );
};

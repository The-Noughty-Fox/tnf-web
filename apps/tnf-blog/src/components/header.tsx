import { Header as HeaderComponent } from '@tnf-workspace/react-components';
import { pageRoutes } from '../lib/pageRoutes.ts';

const links = [
  { name: pageRoutes.services.label, href: pageRoutes.services.href },
  { name: pageRoutes.portfolio.label, href: pageRoutes.portfolio.href },
  { name: pageRoutes.careers.label, href: pageRoutes.careers.href },
  { name: pageRoutes.contacts.label, href: pageRoutes.contacts.href },
  { name: pageRoutes.blog.label, href: pageRoutes.blog.href },
];

export const Header = () => {
  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <HeaderComponent
      links={links}
      homeLink={import.meta.env.PUBLIC_TNF_DOMAIN}
      onMenuToggle={(isOpened: boolean) => {
        if (isOpened) {
          disableScroll();
        } else {
          enableScroll();
        }
      }}
    />
  );
};

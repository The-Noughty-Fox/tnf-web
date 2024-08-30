import { ArrowDownSvg } from '@tnf-workspace/react-components';
import styles from './styles.module.scss';

export const PointingOutlinedArrow = () => {
  return (
    <div className={styles.arrow}>
      <ArrowDownSvg className="animate-bounce w-3 lg:w-4 relative top-1 text-orange-900 z-10" />
    </div>
  );
};

import styles from './project-buttons.module.scss';
import { Button } from '~/components/button/Button';

type ProjectButtonsProps = {
  linkDeploy?: string;
  linkCode?: string;
};

export const ProjectButtons = ({ linkDeploy, linkCode }: ProjectButtonsProps) => {
  return (
    <>
      {' '}
      <div className={styles.btns}>
        {' '}
        <Button onClick={() => window.open(linkDeploy)}>Deploy</Button>
        <Button onClick={() => window.open(linkCode)} reverseBg={true}>
          Code{' '}
        </Button>
      </div>
    </>
  );
};

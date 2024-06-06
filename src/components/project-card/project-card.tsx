import { Button } from '../button/Button';
import styles from './project-card.module.scss';

export const ProjectCard = () => {
  return (
    <div>
      <h2>[SuperBoards]</h2>
      <p>Аналог доски трелло</p>
      <img src="" alt="image-superboards"></img>
      <div className={styles.btns}>
        {' '}
        <Button>Deploy</Button>
        <Button reverseBg={true}> Code </Button>
      </div>
    </div>
  );
};

import { SprintType } from '~/constants/projects-constants';

import styles from './project-description.module.scss';
import { Button } from '~/components/button/Button';

type ProjectDescriptionProps = {
  header?: React.ReactNode;
  description?: string;
  sprints?: SprintType[];
  footer?: React.ReactNode;
  handleOpenSprintsButton?: () => void;
};

export const ProjectDescription = ({
  header,
  description,
  sprints,
  footer,
  handleOpenSprintsButton,
}: ProjectDescriptionProps) => {
  return (
    <div className={styles['description-wrapper']}>
      {header}
      {description && (
        <>
          {' '}
          <p className={styles.description}>{description}</p>
          {sprints && (
            <Button className={styles['btn_sprints']} size="small" onClick={handleOpenSprintsButton}>
              Подробнее о спринтах
            </Button>
          )}
        </>
      )}
      {footer}
    </div>
  );
};

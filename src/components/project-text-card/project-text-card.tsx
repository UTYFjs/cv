import { ProjectDataType } from '~/constants/projects-constants';
import { Button } from '../button/Button';
import styles from './project-text-card.module.scss';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

type ProjectCardProps = ProjectDataType & {
  className?: string;
};

export const ProjectTextCard = ({
  title,
  description,
  features,
  sprints,
  linkCode,
  stack,
  className,
}: ProjectCardProps) => {
  const containerClassNames = cn(styles['project-text-card'], className);
  return (
    <div className={containerClassNames}>
      <div className={styles['title-wrapper']}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.stack}> [ {stack.map((item) => item + ', ')} ]</div>
      </div>
      <div className={styles['description-wrapper']}>
        <p>{description}</p>
        <div className={styles.sprints}>
          {' '}
          {sprints &&
            sprints.map((sprint, index) => (
              <div key={nanoid()} className={styles.sprint}>
                <p className={styles['sprint_title']}> Sprint {index + 1}</p>
                {sprint.features && (
                  <ul className={styles.list}>
                    {sprint.features.map((item) => (
                      <li key={nanoid()}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className={styles.links}>
                  <Link to={sprint.linkTask}> Sprint Description</Link>
                  <Link to={sprint.linkPR}> Pull Request</Link>
                </div>
              </div>
            ))}
          {features && (
            <ul className={styles.list}>
              {features.map((feature) => (
                <li key={nanoid()}>{feature}</li>
              ))}
            </ul>
          )}
        </div>

        <Button className={styles.btn} onClick={() => window.open(linkCode)}>
          Code{' '}
        </Button>
      </div>
    </div>
  );
};

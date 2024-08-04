import { useEffect, useState } from 'react';
import styles from './next-project-list.module.scss';
import cn from 'classnames';
import { ProjectCard } from '~/components/project-card/project-card';
import { PROJECT_NEXT_DATA } from '~/constants/projects-constants';

export const NextProjectList = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
    return () => {
      setAnimation(false);
    };
  }, []);
  const cardClassnames = cn(styles.card, animation && styles.show);

  return (
    <div className={styles['projects_next']}>
      {PROJECT_NEXT_DATA.map(
        ({ id, title, src, shortDescription, description, sprints, linkDeploy, linkCode, stack }) => (
          <ProjectCard
            key={id}
            className={cardClassnames}
            title={title}
            src={src}
            shortDescription={shortDescription}
            description={description}
            sprints={sprints}
            linkDeploy={linkDeploy}
            linkCode={linkCode}
            stack={stack}
            stylesImg={{ aspectRatio: '1/1.05' }}
          />
        )
      )}
    </div>
  );
};

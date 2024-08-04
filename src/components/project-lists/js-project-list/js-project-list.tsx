import { useEffect, useState } from 'react';
import styles from './js-project-list.module.scss';
import cn from 'classnames';
import { ProjectCard } from '~/components/project-card/project-card';
import { PROJECT_JS_DATA } from '~/constants/projects-constants';

export const JsProjectList = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
    return () => {
      setAnimation(false);
    };
  }, []);
  const cardClassnames = cn(styles.card, animation && styles.show);

  return (
    <div className={styles['projects_js']}>
      {PROJECT_JS_DATA.map(({ id, title, src, shortDescription, description, linkDeploy, linkCode, stack }) => (
        <ProjectCard
          key={id}
          className={cardClassnames}
          title={title}
          src={src}
          shortDescription={shortDescription}
          description={description}
          linkDeploy={linkDeploy}
          linkCode={linkCode}
          stack={stack}
          stylesImg={{ aspectRatio: '1.3/1' }}
        />
      ))}
    </div>
  );
};

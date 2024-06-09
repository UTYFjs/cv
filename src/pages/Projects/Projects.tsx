import { ProjectCard } from '~/components/project-card/project-card';
import styles from './Projects.module.scss';
import { PROJECT_JS_DATA, PROJECT_NODEJS_DATA, PROJECT_REACT_DATA } from '~/constants/projects-constants';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Tabs } from '~/components/tabs/tabs';
import { ProjectTextCard } from '~/components/project-text-card/project-text-card';

export const ProjectsPage = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
    return () => {
      setAnimation(false);
    };
  }, []);
  const cardClassnames = cn(styles.card, animation && styles.show);

  return (
    <>
      <Tabs
        tabs={[
          {
            label: 'React',
            content: (
              <div className={styles['projects_react']}>
                {PROJECT_REACT_DATA.map(
                  ({ id, title, src, shortDescription, description, linkDeploy, linkCode, stack }) => (
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
                    />
                  )
                )}
              </div>
            ),
          },
          {
            label: 'JS, HTML, CSS',
            content: (
              <div className={styles['projects_js']}>
                {PROJECT_JS_DATA.map(
                  ({ id, title, src, shortDescription, description, linkDeploy, linkCode, stack }) => (
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
                      id={''}
                    />
                  )
                )}
              </div>
            ),
          },
          {
            label: 'Node.JS',
            content: (
              <div className={styles['projects_nodejs']}>
                {PROJECT_NODEJS_DATA.map(
                  ({ id, title, src, shortDescription, description, linkDeploy, linkCode, stack }) => (
                    <ProjectTextCard
                      key={id}
                      className={cardClassnames}
                      title={title}
                      src={src}
                      shortDescription={shortDescription}
                      description={description}
                      linkDeploy={linkDeploy}
                      linkCode={linkCode}
                      stack={stack}
                      id={''}
                    />
                  )
                )}
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

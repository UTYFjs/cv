import { ProjectCard } from '~/components/project-card/project-card';
import styles from './Projects.module.scss';
import { PROJECT_REACT_DATA } from '~/constants/projects-constants';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Tabs } from '~/components/tabs/tabs';

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
                      size={'medium'}
                    />
                  )
                )}
              </div>
            ),
          },
          { label: 'JS, HTML, CSS', content: <p>content tab 2</p> },
          { label: 'Node.JS', content: <p>content tab 3</p> },
        ]}
      />
    </>
  );
};

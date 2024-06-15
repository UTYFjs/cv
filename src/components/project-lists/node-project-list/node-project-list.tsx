import styles from './node-project-list.module.scss';
import { PROJECT_NODEJS_DATA } from '~/constants/projects-constants';
import { ProjectTextCard } from '~/components/project-text-card/project-text-card';

export const NodeProjectList = () => {
  return (
    <div className={styles['projects_nodejs']}>
      {PROJECT_NODEJS_DATA.map(
        ({ id, title, src, shortDescription, description, linkDeploy, sprints, features, linkCode, stack }) => (
          <ProjectTextCard
            key={id}
            className={styles.card}
            title={title}
            src={src}
            shortDescription={shortDescription}
            description={description}
            sprints={sprints}
            features={features}
            linkDeploy={linkDeploy}
            linkCode={linkCode}
            stack={stack}
            id={''}
          />
        )
      )}
    </div>
  );
};

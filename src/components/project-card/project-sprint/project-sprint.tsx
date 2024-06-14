import { SprintType } from '~/constants/projects-constants';

import styles from './project-sprint.module.scss';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import cn from 'classnames';

type ProjectSprintProps = {
  sprint: SprintType;
  className?: string;
};

export const ProjectSprint = ({ sprint }: ProjectSprintProps) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [srcImg, setSrcImg] = useState('');
  useEffect(() => {
    setActiveFeature(0);
    setSrcImg(sprint.features[0]?.srcImg || '');
  }, [sprint]);
  const handleOnClickFeature = (index: number) => {
    setActiveFeature(index);
    setSrcImg(sprint.features[index]?.srcImg || '');
  };
  return (
    <>
      <p className={styles.title}> {sprint.name}</p>
      <div className={styles['project_sprint']}>
        <ul className={styles['features-list']}>
          {sprint.features.map((feature, index) => (
            <li
              key={nanoid()}
              className={cn(styles.feature, index === activeFeature && styles.active)}
              onClick={() => handleOnClickFeature(index)}
            >
              {feature?.text}
            </li>
          ))}
        </ul>
        <img className={styles['img']} src={srcImg} />
      </div>
    </>
  );
};

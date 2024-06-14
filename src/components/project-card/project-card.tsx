import { ProjectDataType } from '~/constants/projects-constants';
import { Button } from '../button/Button';
import styles from './project-card.module.scss';
import cn from 'classnames';
import { Modal } from '../modal/modal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Tabs } from '../tabs/tabs';
import { ProjectSprint } from './project-sprint/project-sprint';

type ProjectCardProps = Omit<ProjectDataType, 'id'> & {
  className?: string;
};

export const ProjectCard = ({
  title,
  src,
  shortDescription,
  description,
  linkDeploy,
  linkCode,
  sprints,
  stack,
  className,
}: ProjectCardProps) => {
  const [isModal, setIsModal] = useState(false);
  const containerClassNames = cn(styles['project-card'], className);
  const handleOpenModal = () => {
    setIsModal(true);
  };
  const onCloseModal = () => {
    setIsModal(false);
  };
  return (
    <div className={containerClassNames}>
      <h2>[{title}]</h2>
      <p>{shortDescription}</p>
      <div className={styles['img-wrapper']}>
        {' '}
        <img className={styles.img} src={src} alt="image-superboards"></img>
        {description && (
          <div className={styles['project-card_description']}>
            {' '}
            <p>{description}</p>
            {sprints && (
              <Button className={styles['btn_sprints']} size="small" onClick={handleOpenModal}>
                Подробнее
              </Button>
            )}
          </div>
        )}
      </div>
      <div className={styles.stack}> [ {stack.map((item) => item + ', ')} ]</div>
      <div className={styles.btns}>
        {' '}
        <Button onClick={() => window.open(linkDeploy)}>Deploy</Button>
        <Button onClick={() => window.open(linkCode)} reverseBg={true}>
          Code{' '}
        </Button>
      </div>
      {isModal &&
        sprints &&
        createPortal(
          <Modal
            isActive={isModal}
            body={
              <Tabs
                tabs={sprints.map((sprint, index) => ({
                  label: `Sprint ${index + 1}`,
                  content: <ProjectSprint sprint={sprint} />,
                }))}
              ></Tabs>
            }
            contentStyles={{ width: '80%', height: '80%' }}
            onClose={onCloseModal}
          />,
          document.body
        )}
    </div>
  );
};

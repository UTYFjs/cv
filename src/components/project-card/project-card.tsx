import { ProjectDataType } from '~/constants/projects-constants';
import styles from './project-card.module.scss';
import cn from 'classnames';
import { Modal } from '../modal/modal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Tabs } from '../tabs/tabs';
import { ProjectSprint } from './project-sprint/project-sprint';
import { useWindowWidth } from '~/hooks/use-window-width';
import { Drawer } from '../drawer/drawer';
import { ProjectDescription } from './project-description/project-description';
import { ProjectButtons } from './project-buttons/project-buttons';

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
  const [isDrawer, setIsDrawer] = useState(false);
  const { isDesktop, isMobile } = useWindowWidth();
  const containerClassNames = cn(styles['project-card'], className);

  const stackJSX = <div className={styles.stack}> [ {stack.map((item) => item + ', ')} ]</div>;
  const handleOpenModal = () => {
    setIsModal(true);
  };
  const handleToggleDrawer = () => {
    setIsDrawer((state) => !state);
  };
  const onCloseModal = () => {
    setIsModal(false);
  };
  return (
    <div className={containerClassNames}>
      <h2>[{title}]</h2>
      <p className={styles['short-description']}>{shortDescription}</p>
      <div className={styles['img-wrapper']}>
        {' '}
        <img
          className={styles.img}
          src={src}
          alt="image-superboards"
          onClick={isMobile ? handleToggleDrawer : undefined}
        ></img>
        {description && isDesktop && (
          <div className={styles['project-card_description']}>
            <ProjectDescription description={description} sprints={sprints} handleOpenMoreButton={handleOpenModal} />
          </div>
        )}
      </div>
      {stackJSX}
      <ProjectButtons linkCode={linkCode} linkDeploy={linkDeploy} />
      {description &&
        isMobile &&
        createPortal(
          <Drawer isOpen={isDrawer} direction={'bottom'} onClose={handleToggleDrawer}>
            <ProjectDescription
              header={
                <>
                  <h2>[{title}]</h2>
                  {stackJSX}
                </>
              }
              description={description}
              sprints={sprints}
              footer={<ProjectButtons linkCode={linkCode} linkDeploy={linkDeploy} />}
            />
          </Drawer>,
          document.body
        )}
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
                tabContainerStyle={{ maxHeight: 'calc(100% - 480px)', marginBottom: '20px' }}
              ></Tabs>
            }
            onClose={onCloseModal}
          />,
          document.body
        )}
    </div>
  );
};

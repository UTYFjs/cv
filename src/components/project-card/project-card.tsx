import { ProjectDataType } from '~/constants/projects-constants';
import { Modal } from '../modal/modal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Tabs } from '../tabs/tabs';
import { ProjectSprint } from './project-sprint/project-sprint';
import { useWindowWidth } from '~/hooks/use-window-width';
import { Drawer } from '../drawer/drawer';
import { ProjectDescription } from './project-description/project-description';
import { ProjectButtons } from './project-buttons/project-buttons';

import { nanoid } from 'nanoid';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './project-card.module.scss';

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
  const [isDrawerSprints, setIsDrawerSprints] = useState(false);
  const containerClassNames = cn(styles['project-card'], className);

  const stackJSX = <div className={styles.stack}> [ {stack.map((item) => item + ', ')} ]</div>;

  const handleOpenModal = () => {
    setIsModal(true);
  };
  const onCloseModal = () => {
    setIsModal(false);
  };
  const handleToggleProjectSprints = () => {
    setIsDrawerSprints((state) => !state);
  };
  const handleToggleDrawer = () => {
    setIsDrawer((state) => !state);
  };

  return (
    <div className={containerClassNames}>
      <h2 className={styles['project-title']}>[{title}]</h2>
      <p className={styles['short-description']}>{shortDescription}</p>
      <div className={styles['img-wrapper']}>
        <img
          className={styles.img}
          src={src}
          alt="image-superboards"
          onClick={isMobile ? handleToggleDrawer : undefined}
        />
        {description && isDesktop && (
          <div className={styles['project-card_description']}>
            <ProjectDescription description={description} sprints={sprints} handleOpenSprintsButton={handleOpenModal} />
          </div>
        )}
      </div>
      {stackJSX}
      <ProjectButtons linkCode={linkCode} linkDeploy={linkDeploy} />
      {description &&
        isMobile &&
        createPortal(
          <Drawer
            isBack={isDrawerSprints}
            isOpen={isDrawer}
            direction={'bottom'}
            onClose={handleToggleDrawer}
            onBack={handleToggleProjectSprints}
          >
            {isDrawer && !isDrawerSprints && (
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
                handleOpenSprintsButton={handleToggleProjectSprints}
              />
            )}
            {isDrawer && isDrawerSprints && (
              <>
                <h2 className={styles['project-title']}>[{title}]</h2>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  keyboard={{
                    enabled: true,
                    pageUpDown: true,
                  }}
                  pagination={{
                    bulletClass: styles['bullet-class'],
                    bulletActiveClass: styles['bullet-class__active'],
                    clickable: true,
                    renderBullet: function (index, className) {
                      return `<span class="${styles['bullet-class']} ${className}">${index + 1}</span>`; //'<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                  }}
                  direction={'vertical'}
                  modules={[Pagination]}
                  className={styles['my-swiper']}
                >
                  {sprints?.map((item, index) => {
                    return (
                      <SwiperSlide key={nanoid()}>
                        <Swiper
                          className={styles['my-swiper']}
                          direction={'horizontal'}
                          spaceBetween={50}
                          slidesPerView={1}
                          keyboard={{
                            enabled: true,
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Pagination]}
                        >
                          {item.features.map((feature, indexFeature) => {
                            console.log('feature', feature);
                            return (
                              <SwiperSlide key={nanoid()}>
                                <h3 className={styles['sprint-title']}>
                                  Sprint {index + 1}: экран {indexFeature + 1}
                                </h3>
                                <img className={styles['slide_img']} src={feature.srcImg}></img>
                                <p className={styles.slide} key={nanoid()}>
                                  {feature.text}
                                </p>
                              </SwiperSlide>
                            );
                          })}
                        </Swiper>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </>
            )}
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

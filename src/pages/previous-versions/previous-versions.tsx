import { VersionItem, VersionProps } from '~/components/version/version';
import styles from './previous-versions.module.scss';
import { nanoid } from 'nanoid';

const versions_data: VersionProps[] = [
  {
    version: 0.1,
    title: 'Начало проекта',
    features: [
      'Проработка идеи и концепции',
      'Опредление стека и конфигурация проекта',
      'Проработка основной идеи дизайна и пользовательского интерфейса',
      'Main Page с parallax анимациями',
    ],
    linkToDeploy: 'https://deploy-preview-3--suhakou-henadzi.netlify.app/',
  },
  {
    version: 0.2,
    title: 'Project page (Desktop)',
    features: ['Определение основных разделов проекта', 'Главное меню', 'Projects Page', 'Страница предыдущих версий'],
    linkToDeploy: 'https://deploy-preview-5--suhakou-henadzi.netlify.app/',
  },
  {
    version: 0.3,
    title: 'Skills & Contacts',
    features: ['Skills page', 'Contacts page'],
    linkToDeploy: 'https://deploy-preview-6--suhakou-henadzi.netlify.app/',
  },
  {
    version: 0.4,
    title: 'Education',
    features: ['Education page', 'Добавлен PDF English version'],
    linkToDeploy: 'https://deploy-preview-7--suhakou-henadzi.netlify.app',
  },
  {
    version: 0.5,
    title: 'Projects & Menu (Mobile)',
    features: [
      'Drawer Component',
      'Добавлено мобильное меню',
      'Адаптив для Project Page',
      'Добавлен Swiper для отображения информации о спринтах проекта в мобильной версии',
    ],
    linkToDeploy: '',
  },
];

export const PreviousVersions = () => (
  <div className={styles.previous}>
    {versions_data.map((version) => (
      <VersionItem key={nanoid()} {...version} />
    ))}
  </div>
);

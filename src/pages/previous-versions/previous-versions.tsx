import styles from './previous-versions.module.scss';

export const PreviousVersions = () => (
  <div className={styles.previous}>
    <div className={styles.version}>
      <div className={styles['version-content']}>
        <p className={styles['version_title']}>V0.1</p>
        <div className={styles['version_description']}>
          <p className={styles['version_name']}>Начало проекта</p>
          <ul className={styles.list}>
            <li>Проработка идеи и концепции</li>
            <li>Опредление стека и конфигурация проекта </li>
            <li>Проработка основной идеи дизайна и пользовательского интерфейса</li>
            <li>Main Page с parallax анимациями</li>
          </ul>
          <a className={styles.link} href="https://suhakou-henadzi-v-01.netlify.app/" target="_blank" rel="noreferrer">
            Link
          </a>
        </div>
      </div>
    </div>
    <div className={styles.version}>
      <div className={styles['version-content']}>
        {' '}
        <p className={styles['version_title']}>V0.2</p>{' '}
        <div className={styles['version_description']}>
          <p className={styles['version_name']}> Project page (Desktop)</p>
          <ul className={styles.list}>
            <li>Определение основных разделов проекта</li>
            <li>Главное меню</li>
            <li>Projects Page</li>
            <li>Страница предыдущих версий</li>
          </ul>

          <a className={styles.link} href="https://suhakou-henadzi.netlify.app/" target="_blank" rel="noreferrer">
            Link
          </a>
        </div>
      </div>
    </div>
  </div>
);

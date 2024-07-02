import { nanoid } from 'nanoid';
import { LINK_CV } from '~/constants/routes-constants';

import styles from './version.module.scss';
export type VersionProps = {
  version: number;
  title: string;
  features: string[];
  linkToDeploy?: string;
};

export const VersionItem = ({ version, title, features, linkToDeploy }: VersionProps) => (
  <div className={styles.version}>
    <div className={styles['version-content']}>
      <p className={styles['version_title']}>{'V' + version}</p>{' '}
      <div className={styles['version_description']}>
        <p className={styles['version_name']}> {title}</p>
        <ul className={styles.list}>
          {features.map((feature) => (
            <li key={nanoid()}>{feature}</li>
          ))}
        </ul>

        <a className={styles.link} href={linkToDeploy ? linkToDeploy : LINK_CV} target="_blank" rel="noreferrer">
          {linkToDeploy ? 'Link ' + 'V' + version : 'Link Current Version'}
        </a>
      </div>
    </div>
  </div>
);

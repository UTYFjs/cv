import { VersionItem } from '~/components/version/version';
import styles from './previous-versions.module.scss';
import { nanoid } from 'nanoid';
import { versions_data } from '~/constants/version-data';

export const PreviousVersions = () => (
  <div className={styles.previous}>
    {versions_data.map((version) => (
      <VersionItem key={nanoid()} {...version} />
    ))}
  </div>
);

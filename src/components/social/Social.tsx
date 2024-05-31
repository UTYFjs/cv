import { CSSProperties } from 'react';
import { GithubSvg, MailSvg, TelegramSvg } from '../custom-icons/CustomIcons';
import styles from './Social.module.scss';
type SocialProps = {
  style?: CSSProperties;
};
export const Social = ({ style }: SocialProps) => (
  <>
    <div className={styles.social} style={style}>
      {/* <img className={styles['social-icon']} src={Telegram} /> */}
      <TelegramSvg className={styles['social-icon']} onClick={() => window.open('https://t.me/utyfjs')} />
      <GithubSvg className={styles['social-icon']} onClick={() => window.open('https://github.com/UTYFjs')} />
      <a className={styles['social-icon']} href="mailto:belarus1990@gmail.com">
        <MailSvg />
      </a>
    </div>
  </>
);

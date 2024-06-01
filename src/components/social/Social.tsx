import { CSSProperties } from 'react';
import { GithubSvg, LinkedinSvg, MailSvg, TelegramSvg, ViberSvg } from '../custom-icons/CustomIcons';
import styles from './Social.module.scss';
type SocialProps = {
  style?: CSSProperties;
};
export const Social = ({ style }: SocialProps) => (
  <>
    <div className={styles.social} style={style}>
      {/* <img className={styles['social-icon']} src={Telegram} /> */}
      <TelegramSvg className={styles['social-icon']} onClick={() => window.open('https://t.me/utyfjs')} />
      <ViberSvg className={styles['social-icon']} onClick={() => window.open('viber://chat?number=%2B375292437459')} />
      <GithubSvg className={styles['social-icon']} onClick={() => window.open('https://github.com/UTYFjs')} />
      <LinkedinSvg
        className={styles['social-icon']}
        onClick={() => window.open('https://www.linkedin.com/in/henadzi-suhakou/')}
      />
      <a className={styles['social-icon']} href="mailto:belarus1990@gmail.com">
        <MailSvg />
      </a>
    </div>
  </>
);

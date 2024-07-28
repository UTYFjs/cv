import { useRef } from 'react';
import { Button } from '~/components/button/Button';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import styles from './contacts.module.scss';
import { GithubSvg } from '~/components/custom-icons/CustomIcons';

export const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    // eslint-disable-next-line import/no-named-as-default-member
    emailjs.sendForm('service_trd72dm', 'template_obn704l', form.current, 'JJ-HPOUdurW6enlYx').then(
      (result) => {
        console.log(result.text);
        console.log('message sent!');
      },
      (error) => {
        console.log(error.text);
        console.log('error sending message, try again!');
      }
    );
    e.currentTarget.reset();
  };
  return (
    <div className={styles['contact-page']}>
      <p className={styles['page-title']}>Контакты</p>

      <form className={styles['form']} ref={form} onSubmit={sendEmail}>
        <input className={styles.input} type="text" name="from_name" placeholder="Имя" required />
        <input className={styles.input} type="email" name="email" placeholder="Ваш e-mail" required />
        <input className={styles.input} type="text" name="theme" placeholder="Тема сообщения " required />
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Сообщение"
          rows={8}
          minLength={10}
          required
        ></textarea>
        <Button className={styles.btn} type="submit">
          Отправить мне сообщение
        </Button>
      </form>

      <div className={styles.contacts}>
        <div className={styles.vertical}>CONTACT ME:</div>
        <div className={styles['contact-list']}>
          <Link className={styles['contact-link']} to="tel:+375292437459">
            <p className={styles['contact-title']}>tel:</p>
            <span> +375292437459</span>
          </Link>
          <Link className={styles['contact-link']} to="mailto:belarus1990@gmail.com">
            <span className={styles['contact-title']}>e-mail:</span>
            <span>belarus1990@gmail.com</span>
          </Link>

          <Link className={styles['contact-link']} to="https://t.me/utyfjs" target="_blank" rel="noreferrer">
            <span className={styles['contact-title']}>telegram:</span>
            <span>@utyfjs</span>
          </Link>
          <Link
            className={styles['contact-link']}
            to="https://www.linkedin.com/in/henadzi-suhakou/"
            target="_blank"
            rel="noreferrer"
          >
            <span>linkedin.com/in/henadzi-suhakou/</span>
          </Link>
        </div>
        <GithubSvg
          width={64}
          height={64}
          className={styles['github']}
          onClick={() => window.open('https://github.com/UTYFjs')}
        />
      </div>
    </div>
  );
};

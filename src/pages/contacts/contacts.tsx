import { useEffect, useRef } from 'react';
import styles from './contacts.module.scss';
import { Button } from '~/components/button/Button';
import { Link } from 'react-router-dom';
import { checkValidity } from '~/utils/checkValidity';

export const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (form.current) {
      form.current.addEventListener('input', checkValidity);
      // return form.current.removeEventListener('input', checkValidity);
    }
  }, [form]);

  return (
    <div className={styles['contact-page']}>
      <p className={styles['page-title']}>Связаться со мной</p>

      <form className={styles['form']} ref={form}>
        <input className={styles.input} type="text" name="name" placeholder="Имя" required />
        <input className={styles.input} type="email" name="e-mail" placeholder="e-mail" required />
        <input className={styles.input} type="text" name="theme" placeholder="Тема сообщения " required />
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Сообщение"
          rows={8}
          minLength={15}
          required
        ></textarea>
        <button className={styles.btn} type="submit">
          Отправить сообщение
        </button>
        <Button
          className={styles.btn}
          type="submit"
          // onClick={(e) =>
          //   console.log(
          //     'message submit',
          //     e,
          //     form.current?.elements?.message.value,
          //     e.target.checkValidity(),
          //     form.current?.checkValidity()
          //   )
          // }
        >
          Отправить сообщение
        </Button>
      </form>

      <div className={styles.contacts}>
        <div className={styles.vertical}>CONTACT ME:</div>
        <div className={styles['contact-list']}>
          <Link className={styles['contact-link']} to="tel:+995595909226">
            <span>tel:</span>
            <span> +375292437459</span>
          </Link>
          <Link className={styles['contact-link']} to="mailto:belarus1990@gmail.com">
            <span>e-mail:</span>
            <span>belarus1990@gmail.com</span>
          </Link>

          <Link className={styles['contact-link']} to="https://t.me/utyfjs" target="_blank" rel="noreferrer">
            <span>telegram:</span>
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
      </div>
    </div>
  );
};

import { FormEvent, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5';

import styles from './component.module.scss';
import { env } from '../../config/env';

export function Contact() {
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setLoading(true);
      await emailjs.sendForm(env.VITE_SERVICE_ID, env.VITE_TEMPLATE_ID, form.current, env.VITE_PUBLIC_KEY);
      setSuccessMessage('El mensaje se ha enviado correctamente, pronto responderemos a tu correo 😄');
    } catch (error) {
      console.log(error);
      setError('Algo ha salido mal al enviar tu correo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.Section}>
      <h3 className={styles.TitleSection}>Contácteme</h3>

      <div className={styles.FormContainer}>
        <div className={styles.ContactInfo}>
          <h4 className={styles.Title}>Contácteme 👋</h4>

          <p className={styles.Info}>
            Si estás buscando incorporar un nuevo miembro a tu equipo, o si estás interesado en colaborar conmigo para
            un proyecto específico, o incluso si necesitas ayuda en el desarrollo de un sistema, estaré encantado de
            saber de ti. Puedes contar con recibir una respuesta en menos de 24 horas.
          </p>

          <div className={styles.SocialMedia}>
            <h4 className={styles.Title}>Otros contactos</h4>

            <a className={styles.SocialMediaBox} href='https://github.com/luis-bzk' target='_blank'>
              <IoLogoGithub className={styles.Icon} />
              <span className={styles.Text}>GitHub</span>
            </a>

            <a
              className={styles.SocialMediaBox}
              href='https://www.linkedin.com/in/luis-berrezueta-96b261231/'
              target='_blank'
            >
              <IoLogoLinkedin className={styles.Icon} />
              <span className={styles.Text}>LinkedIn</span>
            </a>

            <a
              className={styles.SocialMediaBox}
              href='https://api.whatsapp.com/send?phone=0986351544&text=Hola!%20necesito%20informaci%C3%B3n'
              target='_blank'
            >
              <IoLogoWhatsapp className={styles.Icon} />
              <span className={styles.Text}>WhatsApp</span>
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={(event) => sendEmail(event)} className={styles.Form}>
          <div className={styles.InputBox}>
            <label className={styles.Label}>Nombre</label>
            <input className={styles.InputForm} type='text' name='user_name' placeholder='Juan Sanchez' />
          </div>

          <div className={styles.InputBox}>
            <label className={styles.Label}>Email</label>
            <input className={styles.InputForm} type='email' name='user_email' placeholder='juan_sanchez@gmail.com' />
          </div>

          <div className={styles.InputBox}>
            <label className={styles.Label}>Mensaje</label>
            <textarea
              className={`${styles.InputForm} ${styles.TextArea}`}
              name='message'
              placeholder='Hola! quisiera obtener mas información :)'
            />
          </div>

          <input
            className={styles.InputButton}
            type='submit'
            value={loading ? 'Enviando...' : 'Enviar'}
            disabled={loading ? true : false}
          />
        </form>
      </div>

      {successMessage ? <p className={styles.SuccessMessage}>{successMessage}</p> : null}
      {error ? <p className={styles.ErrorForm}>{error}</p> : null}
    </section>
  );
}

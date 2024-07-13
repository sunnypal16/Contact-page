import React from 'react';
import styles from './Contact.module.css';
import Button from '../Button/Button';
import { MdFlaky, MdMessage } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';
import { IoIosMail } from 'react-icons/io';

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<IoIosCall fontSize="24px" />} />
        </div>
        <Button isOutline text="VIA EMAIL FORM" icon={<IoIosMail fontSize="24px" />} />


        <form action="">
          <div className= {styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="" />
          </div>
          <div className= {styles.form_control}>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="" />
          </div>
          <div className= {styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" id="text" rows={8}></textarea>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "end"
        }}>
            <Button text="SUBMIT" />
          </div>   
        </form>
      </div>
      <div className={styles.contact_image}></div>
      <img src="/images/contact.svg" alt="contact" />

    </section>
  );
};

export default ContactForm;

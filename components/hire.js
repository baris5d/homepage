import ReCAPTCHA from 'react-google-recaptcha';
import React, { useState, useEffect, useRef } from 'react';
import styles from './hire.module.scss'

const KEY = "your-site-key"
// You can create your own key on https://www.google.com/recaptcha/admin/create

export function Hire({ text, url, urlText }){

  const [flag, setFlag] = useState(0);
  const recaptchaRef = useRef(0)
  
  useEffect(() => {
    recaptchaRef.current.execute();
  },[])

  return(
      <div>
        <ReCAPTCHA
          className= "grecaptchaBadge"
          sitekey= {KEY}
          ref={recaptchaRef}
          size="invisible"
          onChange={ _ => setFlag(1) }
        />
        <p>{text} <a href={flag ? url : "#"} className={styles.link}>{ urlText }</a></p>
      </div>
  )
}
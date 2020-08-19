import Recaptcha from 'react-google-invisible-recaptcha';
import React, { useState, useEffect, useRef } from 'react';
import styles from './hire.module.scss'

export function Hire({ text, url, urlText }){

  const [flag, setFlag] = useState(1);
  const recaptcha = useRef(0)

  const onResolved = () => {
    recaptcha.current.getResponse();
    setFlag(0);
  }

  useEffect(() =>{
    recaptcha.current.reset();
    recaptcha.current.execute();
  },[])

  return(
      <div>
        <Recaptcha
          className= "grecaptchaBadge"
          ref={ ref => recaptcha.current = ref }
          sitekey= "your-site-key"
          onResolved={ onResolved }
        />
        <p>{text} <a href={url} className={styles.link}>{flag ? "" : urlText}</a></p>
      </div>
  )
}
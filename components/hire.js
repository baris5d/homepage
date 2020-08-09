import styles from './hire.module.scss'

export function Hire({ text, url, urlText }){
    return(
        <p>{text} <a href={url} className={styles.link}>{urlText}</a>
        </p>
    )
}
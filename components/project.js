import styles from './project.module.scss'
import IosImage from 'react-ionicons/lib/IosImage'
import IosLinkOutline from 'react-ionicons/lib/IosLinkOutline'

export function Project({title, image, description, url=false, address, attachmentName, attachmentUrl, demo = false}){
    return(
        <div className={styles.project}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.description}>
                <h2>{title}</h2>
                <section dangerouslySetInnerHTML={{__html: description}}></section>
                {url ? <p><a href={url} className={styles.Link}><IosLinkOutline color="#fff"/><span>{address}</span></a></p> : <></>}
                {attachmentName ? <p><a href={attachmentUrl} className={styles.Link}><IosImage color="#fff" /> <span>{ attachmentName }</span></a></p> : <></>}
                {demo ? <p><a href={demo} className={styles.Link}><IosLinkOutline color="#fff"/><span>{demo}</span></a></p> : <></>}
                {!url ? <p className={styles.inactive}>Inactive</p> : <></>}
            </div>
        </div>
    )
}

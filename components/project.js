import styles from './project.module.scss'
import IosLinkOutline from 'react-ionicons/lib/IosLinkOutline'

export function Project({title, image, description, url, address}){
    return(
        <div className={styles.project}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.description}>
                <h2>{title}</h2>
                <section dangerouslySetInnerHTML={{__html: description}}></section>
                <p><a href={url} className={styles.Link}><IosLinkOutline color="#fff"/><span>{address}</span></a></p>
            </div>
        </div>
    )
}

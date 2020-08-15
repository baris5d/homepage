import styles from './article.module.scss'

export function Article({title, image, description, date, readMin, platform, url}){
    return(
        <section className={styles.article}>
            <a target="_blank" href={url}><img src={image} alt=""/></a>
            <div className={styles.content}>
                <h3><a target="_blank" href={url}>{title}</a></h3>
                <a target="_blank" href={url}><p>{description}</p></a>
                <span>{date} – {readMin} min. read</span> • <span>on {platform}</span>
            </div>
        </section>
    )
}
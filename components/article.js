import styles from './article.module.scss'

export function Article({title, image, description, date, readMin, platform, url}){
    return(
        <section className={styles.article}>
            <img src={image} alt=""/>
            <div className={styles.content}>
                <h3><a target="_blank" href={url}>{title}</a></h3>
                <p>{description}</p>
                <span>{date} – {readMin} min. read</span> • <span>on {platform}</span>
            </div>
        </section>
    )
}
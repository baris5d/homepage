import styles from './image.module.scss'

export function ProfileImage({image}) {
  return (
      <div className={styles.imageContainer}>
          <img src={image} alt="" className={styles.primaryImage}/>
      </div>
  )
}
import Link from 'next/link'
import styles from './header.module.scss'
const menu = [
    { name : 'projects', uri : '/projects' },
    { name : 'articles', uri : '/articles' }
]
export function Header({active = false}) {
  return (
      <header className={styles.header}>
          <div className={styles.logo}>
              <a href="/" ></a>
          </div>
          <nav>
            {menu.map(m => {
                return(
                    <Link
                        key={m.uri}
                        href={m.uri}
                    >
                        <a className={active == m.name ? styles.active : ""}>{m.name}</a>
                    </Link>
                )
            })}
          </nav>
      </header>
  )
}
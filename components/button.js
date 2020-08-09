import Link from 'next/link'
import styles from './button.module.scss'

export function Button({ text, url , className }){
    return (
        <button className = { className || styles.button}>
            <a href={ url }>
                { text }
            </a>
        </button>
    )
}
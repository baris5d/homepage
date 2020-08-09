import styles from './welcome.module.scss'

export function Welcome({children}){
    return(
        <div className="welcome-container">
           {children}
        </div>
    )
}
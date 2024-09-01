import css from './Logo.module.css'
export default function Logo() {
 return (
    <div className={css.container}>
        <p className={css.main}>Travel</p>
        <span className={css.sec}>Trucks</span>
    </div>
 )
}
import css from './Logo.module.css'
import { NavLink } from 'react-router-dom'
export default function Logo() {
 return (
    <NavLink to='/' className={css.container}>
        <p className={css.main}>Travel</p>
        <span className={css.sec}>Trucks</span>
    </NavLink>
 )
}
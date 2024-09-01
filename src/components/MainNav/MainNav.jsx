import { NavLink } from "react-router-dom"
import css from './MainNav.module.css'
import clsx from "clsx";
const getClasses = ({isActive}) => {
    return clsx(css.link, isActive && css.active);
}
export default function MainNav() {
    return (
        <nav className={css.container}>
            <NavLink to='/' className={getClasses}>Home</NavLink>
            <NavLink to='/catalog' className={getClasses}>Catalog</NavLink>
        </nav>
    )
}
import Logo from "../Logo/Logo.jsx";
import MainNav from "../MainNav/MainNav.jsx";
import css from './Header.module.css'
export default function Header() {
    return (
        <header className={css.container}>
            <Logo></Logo>
            <MainNav></MainNav>
        </header>
    )
}
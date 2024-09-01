import css from './HomePage.module.css'
import { NavLink } from 'react-router-dom'
export default function HomePage() {
    return (
        <section className={css.container}>
            <h1 className={css.mainHead}>Campers of your dreams</h1>
            <h2 className={css.secHead}>You can find everything you want in our catalog</h2>
            <NavLink to='/catalog' className={css.btn}>View Now</NavLink>
        </section>
    )
}
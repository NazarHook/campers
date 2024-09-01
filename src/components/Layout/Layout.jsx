import Header from '../Header/Header'
import css from './Layout.module.css'
// eslint-disable-next-line react/prop-types
export default function Layout({children}) {
    return (
        <>
            <Header></Header>
        <div className={css.container}>
            {children}
        </div>
        </>
    )
}
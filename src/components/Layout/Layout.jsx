import Header from '../Header/Header';
import { Outlet } from 'react-router-dom'; 
import css from './Layout.module.css';

export default function Layout() {
    return (
        <>
            <Header />
            <div className={css.container}>
                <Outlet /> 
            </div>
        </>
    );
}

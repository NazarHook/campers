import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CarInfo from '../CarInfo/CarInfo';
import UserForm from '../UserForm/UserForm';
import css from './CampFeatures.module.css';

export default function CampFeatures() {
    const featuresRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.endsWith('/features')) {
            if (featuresRef.current) {
                    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.pathname]);

    return (
        <div className={css.container} ref={featuresRef}>
            <CarInfo />
            <UserForm />
        </div>
    );
}

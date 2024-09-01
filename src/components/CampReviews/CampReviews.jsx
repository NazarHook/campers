import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import UserForm from '../UserForm/UserForm';
import css from './CampReviews.module.css';
import ReviewsComments from '../ReviewsComments/ReviewsComments';

export default function CampReviews() {
    const reviewsRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.endsWith('/reviews')) {
            if (reviewsRef.current) {
                reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.pathname]);

    return (
        <div className={css.container} ref={reviewsRef}>
        <ReviewsComments></ReviewsComments>
            <UserForm />
        </div>
    );
}

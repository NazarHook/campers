import css from './ReviewsComments.module.css'
import { useDispatch } from 'react-redux';
import { getCampById } from '../../redux/transports/operations';
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import sprite from '../../assets/sprite.svg';
export default function ReviewsComments() {
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const [campInfo, setCampInfo] = useState({});
    const { id: campId } = useParams();
    useEffect(() => {
        async function getCamp() {
          try {
            setLoader(true);
            const data = await dispatch(getCampById(campId));
            setCampInfo(data.payload);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoader(false);
          }
        }
        getCamp();
      }, [dispatch, campId]);
    const {reviews=[]} = campInfo;
    return (
        <ul className={css.container}>
    {loader && <Loader />}
    {error && <ErrorMessage />}
    {reviews.map(review => (
        <li key={review.reviewer_name}>
           <div className={css.mainInfo}>
            <span className={css.avatar}>{review.reviewer_name[0]}</span>
            <div className={css.nameRating}>
              <p className={css.name}>{review.reviewer_name}</p>
              <span className={css.stars}>
                {Array.from({ length: 5 }).map((num, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="16"
                    className={css.iconCatalog}
                  >
                    <use
                      xlinkHref={
                        index < review.reviewer_rating
                          ? `${sprite}#icon-starPressed`
                          : `${sprite}#icon-star`
                      }
                    ></use>
                  </svg>
                ))}
              </span>
            </div>
           </div>
           <p className={css.comment}>{review.comment}</p>
        </li>
    ))}
        </ul>
    )
}
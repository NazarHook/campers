import css from './CampDetailPage.module.css';
import { useDispatch } from 'react-redux';
import { getCampById } from '../../redux/transports/operations';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import sprite from '../../assets/sprite.svg';

export default function CampDetailPage() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [campInfo, setCampInfo] = useState({});
  const { id: campId } = useParams();

  const {
    name,
    price,
    rating,
    location,
    reviews = [], 
    description,
    gallery = [], 
  } = campInfo;

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

  const imgPaths = gallery.map(path => path.original);
  return (
    <div className={css.container}>
      {loader && <Loader />}
      {error && <ErrorMessage />}

      <div className={css.mainInfo}>
        <h2 className={css.name}>{name}</h2>
        <div className={css.secInfo}>
          <div className={css.secInfoWrapper}>
            <svg width="16" height="16" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-starPressed`}></use>
            </svg>
            <p className={css.text}>
              {rating} ({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.secInfoWrapper}>
            <svg width="16" height="16" className={css.iconMap}>
              <use xlinkHref={`${sprite}#iconMap`}></use>
            </svg>
            <p className={css.text}>{location}</p>
          </div>
        </div>
        <p className={css.price}>€{price}.00</p>
      </div>

      <ul className={css.gallery}>
        {imgPaths.map((imgPath, index) => (
          <li className={css.galleryItem} key={index}>
            <img src={imgPath} alt='photo' />
          </li>
        ))}
      </ul>
      <p className={css.description}>{description}</p>
      <ul className={css.navList}>
            <li className={css.item}>
               <NavLink className={css.link} to={'features'}>Features</NavLink>
            </li>
            <li className={css.item}>
               <NavLink className={css.link} to={'reviews'}>Reviews</NavLink>
            </li>
         </ul>
         <Suspense fallback={<Loader></Loader>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

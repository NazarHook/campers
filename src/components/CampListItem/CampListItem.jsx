/* eslint-disable react/prop-types */
import css from './CampListItem.module.css';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import { selectFavs } from '../../redux/favorites/selectors';

export default function CampListItem({
    camp: {
      name,
      id,
      price,
      rating,
      location,
      reviews,
      description,
      transmission,
      bathroom,
      TV,
      radio,
      refrigerator,
      microwave,
      gas,
      water,
      engine,
      kitchen,
      AC,
      gallery,
    },
}) {
    const imgPaths = gallery.map((img) => img.thumb);
    const path = imgPaths[0];
    const dispatch = useDispatch();
    const favoriteItems = useSelector(selectFavs);
    const isFavorite = favoriteItems.some((item) => item.id === id);

    const categories = [
        { name: 'AC', value: AC, icon: '#icon-wind' },
        { name: 'Transmission', value: transmission, icon: '#icon-diagram' },
        { name: 'Kitchen', value: kitchen, icon: '#icon-cup' },
        { name: 'TV', value: TV, icon: '#icon-tv' },
        { name: 'Bathroom', value: bathroom, icon: '#icon-droplet' },
        { name: 'Radio', value: radio, icon: '#icon-radio' },
        { name: 'Refrigerator', value: refrigerator, icon: '#icon-frigo' },
        { name: 'Microwave', value: microwave, icon: '#icon-microwave' },
        { name: 'Gas', value: gas, icon: '#icon-engine' },
        { name: 'Water', value: water, icon: '#icon-water' },
        { name: 'Engine', value: engine, icon: '#icon-engine' },
    ];

    const activeCategories = categories.filter((category) => category.value);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFavorite({ id }));
        } else {
            dispatch(addFavorite({ name, id, price, rating, location, reviews, description, transmission, bathroom, TV, radio, refrigerator, microwave, gas, water, engine, kitchen, AC, gallery }));
        }
    };

    return (
        <div className={css.container}>
            <img className={css.img} src={path} alt="photo" />
            <div className={css.contentSide}>
                <div className={css.mainInfo}>
                    <h2 className={css.name}>{name}</h2>
                    <div className={css.mainInfoWrapper}>
                        <p className={css.price}>€{price}.00</p>
                        <svg onClick={handleFavoriteToggle} width="26" height="24" className={css.iconFav}>
                            <use xlinkHref={`${sprite}${isFavorite ? '#icon-favPressed' : '#icon-fav'}`}></use>
                        </svg>
                    </div>
                </div>
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
                <p className={css.description}>{description.split(' ').slice(0, 10).join(' ') + '...'}</p>
                <div className={css.categories}>
                    {activeCategories.map((option) => (
                        <span key={option.name} className={css.option}>
                            <svg width="32" height="32" className={css.icon}>
                                <use xlinkHref={`${sprite}${option.icon}`}></use>
                            </svg>
                            {option.name}
                        </span>
                    ))}
                </div>
                <NavLink to={`/catalog/${id}`} className={css.btn}>Show More</NavLink>
            </div>
        </div>
    );
}

import css from './CarInfo.module.css'
import { useDispatch } from 'react-redux';
import { getCampById } from '../../redux/transports/operations';
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import sprite from '../../assets/sprite.svg';
export default function CarInfo() {

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
    const {form, length, width, height, tank, consumption, transmission,
        bathroom,
        TV,
        radio,
        refrigerator,
        microwave,
        gas,
        water,
        engine,
        kitchen,
        AC,} = campInfo;

    const details = [
        {
            name: "Form",
            value: form,
        },
        {
            name: "Length",
            value: length,
        },
        {
            name: "Width",
            value: width,
        },
        {
            name: "Height",
            value: height,
        },
        {
            name: "Tank",
            value: tank,
        },
        {
            name: "Consumption",
            value: consumption,
        },
    ]

    const categories = [
        {
          name: 'AC',
          value: AC,
          icon: '#icon-wind',
        },
        {
          name: 'Transmission',
          value: transmission,
          icon: '#icon-diagram',
        },
        {
          name: 'Kitchen',
          value: kitchen,
          icon: '#icon-cup',
        },
        {
          name: 'TV',
          value: TV,
          icon: '#icon-tv',
        },
        {
          name: 'Bathroom',
          value: bathroom,
          icon: '#icon-droplet',
        },
        {
          name: 'Radio',
          value: radio,
          icon: '#icon-radio',
        },
        {
          name: 'Refrigerator',
          value: refrigerator,
          icon: '#icon-frigo',
        },
        {
          name: 'Microwave',
          value: microwave,
          icon: '#icon-microwave',
        },
        {
          name: 'Gas',
          value: gas,
          icon: '#icon-engine',
        },
        {
          name: 'Water',
          value: water,
          icon: '#icon-water',
        },
        {
          name: 'Engine',
          value: engine,
          icon: '#icon-engine',
        },
      ];
    
      const activeCategories = categories.filter((category) => category.value);
    return (
        <div className={css.container}>
             {loader && <Loader />}
             {error && <ErrorMessage />}
             <div className={css.categories}>
            {activeCategories.map((option) => (
                <span key={option.name} className={css.option}>
                  <svg width="32" height="32" className={css.iconCatalog}>
                    <use xlinkHref={`${sprite}${option.icon}`}></use>
                  </svg>
                  {option.name}
                </span>
          ))}
          </div>
     <div className={css.details}>
<h3 className={css.labelEquipment}>Vehicle details</h3>
<ul className={css.detailsList}>
    {details.map(info => (
        <li className={css.optionRow} key={info.name}>
            <span className={css.optionName}>{info.name}</span>
            <span className={css.optionName}>{info.value}</span>
        </li>
    ))}
</ul>
<ul>
</ul>
     </div>
        </div>
    )
}
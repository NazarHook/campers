/* eslint-disable no-unused-vars */
import css from './CampList.module.css';
import { useSelector } from 'react-redux';
import { selectCamps, selectFilteredCamps } from '../../redux/transports/selectors.js';
import CampListItem from '../CampListItem/CampListItem';
import { useState } from 'react';
import { selectOptionFilters } from '../../redux/filters/selectors';
export default function CampList() {
    const camps = useSelector(selectFilteredCamps)
    const equipment = useSelector(selectOptionFilters)
    return (
        <ul className={css.list}>
            {camps.map(camp => (
                <li className={css.item} key={camp.id}>
                    <CampListItem camp={camp} />
                </li>
            ))}
        </ul>
    );
}

/* eslint-disable no-unused-vars */
import css from './CampList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredCamps } from '../../redux/transports/selectors.js';
import CampListItem from '../CampListItem/CampListItem';
import { useState, useRef } from 'react';
import { selectOptionFilters } from '../../redux/filters/selectors';

export default function CampList() {
    const camps = useSelector(selectFilteredCamps);
    const equipment = useSelector(selectOptionFilters);
    const [itemsPerPage] = useState(2); 
    const [currentPage, setCurrentPage] = useState(1); 
    const listRef = useRef(null); 

    const totalPages = Math.ceil(camps.length / itemsPerPage);

    const displayedCamps = camps.slice(0, currentPage * itemsPerPage);

    const loadMore = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setTimeout(() => {
                listRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100); 
        }
    };

    return (
        <div>
            <ul className={css.list} >
                {displayedCamps.map(camp => (
                    <li ref={listRef} className={css.item} key={camp.id}>
                        <CampListItem camp={camp} />
                    </li>
                ))}
            </ul>
            {currentPage < totalPages && (
                <button onClick={loadMore} className={css.loadMoreBtn}>
                    Load More
                </button>
            )}
        </div>
    );
}
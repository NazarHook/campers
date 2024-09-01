import SideBar from '../../components/SideBar/SideBar.jsx'
import css from './CatalogPage.module.css'
import CampList from '../../components/CampList/CampList.jsx'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getCamps } from '../../redux/transports/operations.js'
import Loader from '../../components/Loader/Loader.jsx'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx'
import { useSelector } from 'react-redux'
import { selectLoading } from '../../redux/transports/selectors'
import { selectFavs } from '../../redux/favorites/selectors.js'
export default function CatalogPage() {
    const [loader, setLoader] = useState(useSelector(selectLoading))
    const [error, setError] = useState(useSelector(selectLoading))
    const dispatch = useDispatch()
    const items = useSelector(selectFavs)
    console.log(items);
useEffect(() => {
    try {
        setLoader(true)
    dispatch(getCamps());
    setLoader(false)
    } catch (error) {
        setError(error)
    }
    finally {
        setLoader(false)
    }
  }, [dispatch])
    return (
        <div className={css.container}>
               {error && <ErrorMessage></ErrorMessage>}
               {loader && <Loader></Loader>}
            <SideBar></SideBar>
            <CampList></CampList>
        </div>
    )
}
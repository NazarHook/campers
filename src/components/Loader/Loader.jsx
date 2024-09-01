import { LineWave } from 'react-loader-spinner'
import css from './Loader.module.css'
export default function Loader() {
    return(
        <div className={css.loader}>
            <LineWave
            height={150}
            width={150}
            color="#ff0000"
            ariaLabel="custom-line-wave-loading"
            wrapperStyle={{ opacity: '0.5' }}
            wrapperClass="custom-wrapper-class"
            firstLineColor="aqua"
            middleLineColor="aqua"
            lastLineColor="aqua"></LineWave>
        </div>
    )
}
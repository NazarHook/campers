import css from './ErrorMessage.module.css'
export default function ErrorMessage() {
    return (
        <p className={css.message}>Sorry something went wrong</p>
    )
}
import './Button.css'

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className='button accent'>{text}</button>
    )
}

export default Button
import { memo } from 'react'
import './Button.css'

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className='button accent'>{children}</button>
    )
}

export default memo(Button);
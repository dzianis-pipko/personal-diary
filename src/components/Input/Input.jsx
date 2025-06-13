import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(({isValid, appearance = 'text', className, ...props}, ref) => {
    return(
        <input {...props} ref={ref} className={cn(className, styles.input, {
            [styles.invalid]: isValid,
            [styles['input-title']]: appearance === 'title',
            [styles['input']]: appearance == 'text'
        })} />
    )
})

export default Input
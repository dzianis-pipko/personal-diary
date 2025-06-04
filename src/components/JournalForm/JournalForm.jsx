import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

const JournalForm = ({onSubmit}) => {

    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const {isValid, values, isFormReadyToSubmit} = formState;

    useEffect(() => {
        let timerId;
        if(!isValid.title || !isValid.date || !isValid.tag || !isValid.text){
            timerId = setTimeout(() => {
                dispatchForm({type: 'RESET_VALIDITY'});
            }, 2000)
        }
        return () => {
            clearTimeout(timerId)
        }
    }, [isValid])

    useEffect(() => {
        if(isFormReadyToSubmit){
            onSubmit(values)
        }
    }, [isFormReadyToSubmit])

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData)
        dispatchForm({type: 'SUBMIT', payload: formProps})
    }

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div className={styles['form-row']}>
				<input type='text' name='title' className={cn(styles['input-title'], {
                    [styles.invalid]: !isValid.title
                })} />
			</div>
            <div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src='/calendar.svg' alt='Иконка календаря'/>
					<span>Дата</span>
				</label>
				<input type='date' name='date' className={cn(styles.input, {
                    [styles.invalid]: !isValid.date
                })} />
			</div>
            <div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src='/folder.svg' alt='Иконка папки'/>
					<span>Метки</span>
				</label>
				<input type='text' name='tag' className={cn(styles.input, {
                    [styles.invalid]: !isValid.tag
                })} />
			</div>
            <textarea name='text' id='' cols={30} rows={10} className={cn(styles.input, {
                [styles.invalid]: !isValid.text
            })} />
            <Button text="Save" onClick={() => console.log('tap')} />
        </form>
	);
}

export default JournalForm;
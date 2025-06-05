import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../Input/Input';

const JournalForm = ({onSubmit}) => {

    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const {isValid, values, isFormReadyToSubmit} = formState;
    const titleRef = useRef();
    const dateRef = useRef();
    const tagRef = useRef();
    const textRef = useRef();

    const focusError = (isValid) => {
        switch(true){
            case !isValid.title:
                titleRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
            case !isValid.tag:
                tagRef.current.focus();
                break;
            case !isValid.text:
                textRef.current.focus();
                break;
        }
    }

    useEffect(() => {
        let timerId;
        if(!isValid.title || !isValid.date || !isValid.tag || !isValid.text){
            focusError(isValid)
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
            dispatchForm({type: 'CLEAR'})
        }
    }, [isFormReadyToSubmit, values, onSubmit])

    const onChange = (e) => {
        dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}});
    }

    const addJournalItem = (e) => {
        e.preventDefault();
        dispatchForm({type: 'SUBMIT'})
    }

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div className={styles['form-row']}>
				<Input type='text' ref={titleRef} isValid={isValid.title} appearance='title' onChange={onChange} name='title' value={values.title} />
			</div>
            <div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src='/calendar.svg' alt='Иконка календаря'/>
					<span>Дата</span>
				</label>
				<Input type='date' ref={dateRef} isValid={isValid.date} onChange={onChange} name='date' value={values.date} />
			</div>
            <div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src='/folder.svg' alt='Иконка папки'/>
					<span>Метки</span>
				</label>
				<Input type='text' ref={tagRef} isValid={isValid.text} onChange={onChange} name='tag' value={values.tag} />
			</div>
            <textarea name='text' ref={textRef} onChange={onChange} value={values.text} id='' cols={30} rows={10} className={cn(styles.input, {
                [styles.invalid]: !isValid.text
            })} />
            <Button text="Save" onClick={() => console.log('tap')} />
        </form>
	);
}

export default JournalForm;
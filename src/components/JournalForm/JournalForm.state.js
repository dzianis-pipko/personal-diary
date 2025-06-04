export const INITIAL_STATE = {
    isValid: {
		title: true,
        date: true,
        tag: true,
        text: true
	},
    values: {
        title: undefined,
        date: undefined,
        tag: undefined,
        text: undefined
    },
    isFormReadyToSubmit: false,
};

export function formReducer(state, action){
    switch(action.type){
        case 'RESET_VALIDITY':
            return {...state, isValid: INITIAL_STATE.isValid};
        case 'SUBMIT': {
            const titleValidity = action.payload.title?.trim().length;
            const dateValidity = action.payload.date;
            const tagValidity = action.payload.tag?.trim().length;
            const textValidity = action.payload.text?.trim().length;

            return {
                values: action.payload,
                isValid: {
                    title: titleValidity,
                    date: dateValidity,
                    tag: tagValidity,
                    text: textValidity
                },
                isFormReadyToSubmit: titleValidity && dateValidity && tagValidity && textValidity,
            }
        }
    }
}
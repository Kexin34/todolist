
const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    if (action.type === 'change_input_value'){
        const newSate = JSON.parse(JSON.stringify(state));
        newSate.inputValue = action.value;
        return newSate;
    }
    if (action.type === 'add_item'){
        const newSate = JSON.parse(JSON.stringify(state));
        newSate.list.push(newSate.inputValue);
        newSate.inputValue = '';
        return newSate;
    }
    return state;
}
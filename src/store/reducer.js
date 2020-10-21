import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    // state存放的是整个图书馆里所有图书的信息
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));//深拷贝
        newState.inputValue = action.value;
        return newState;
    }
    // 按钮submit信息到list中
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue= '';
        return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    return state;
}
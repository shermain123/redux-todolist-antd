const defaultState = {
    inputValue: '',
    list: ['Dell','Lee','IMOOC']
}
//第4步 处理store的值并返回一个新的store
//reducer 可以接收state 但是绝不能修改state
export default (state = defaultState,action) => {
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));//深拷贝
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'add_todo_item'){
        //点提交时将input值添加到list列表里然后情况input值 全过程将由redux完成
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
}
import {createStore} from 'redux'
import reducer from './reducer'
// 使用redux 第三步 创建store 在创建store 时传一个函数 reducer 函数reducer对action携带的数据进行处理并返回一个新的store 从而改变store的值
//创建 store      redux调试  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
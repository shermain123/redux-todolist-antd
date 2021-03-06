import React, { Component,Fragment } from 'react';
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css';
import store from './store/index'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'


class TodoList extends Component {
    constructor(props){
        super(props);
        //获取store里所有的值
        this.state = store.getState();
        //这种绑定能够提升性能
        this.handleChange = this.handleChange.bind(this)
        this.handelStoreChange = this.handelStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        //第5步 订阅 store 当store中数据发生改变时自动更新数据
        store.subscribe(this.handelStoreChange)
    }
    
    render(){
        return (
            <Fragment>
                <Input value={this.state.inputValue} onChange={this.handleChange} style={{width:'30%',marginRight:'10px',marginLeft:'10px',marginTop:'10px'}} placeholder="请输入内容" />
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                <List style={{marginTop:'10px',width:'50%',marginLeft:'10px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
                />
            </Fragment>
        )
    }
    handleChange(e){
        // this.setState(()=>({
        //     inputValue:e.target.value,
        //     list:[...this.state.list]
        // }),()=>{
        //     console.log(this.state)
        // })
        //使用 redux 第一步
        //创建 action 改变redux里的数据
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        //第二步 调用 store中的dispatch方法将创建的action传入
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }
    //订阅store所执行的函数
    handelStoreChange(){
        //console.log(store.getState().inputValue)
        this.setState(()=>({
            inputValue:store.getState().inputValue,
            list:[...store.getState().list]
        }))
    }
    handleBtnClick(){
        // const action = {
        //     type: ADD_TODO_ITEM,
        //     value: this.state.inputValue
        // }
        const action = getAddItemAction();
        store.dispatch(action);
        console.log(this.state)
    }

    //删除 store 中的数据
    handleItemDelete(index){
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     value:index
        // }
        const action = getDeleteItemAction(index);
        store.dispatch(action)
    }
}

export default TodoList;

/**
 * 使用 redux 
 * 第一步 创建一个 action {}
 */
import React, { Component,Fragment } from 'react';
import { connect } from "react-redux";

class TodoList extends Component {
    
    render(){
        return (
            <Fragment>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {this.props.list.map((item,index)=>(
                        <li onClick={this.props.handleDelete(index)} key={index}>{item}</li>
                    ))}
                </ul>
            </Fragment>
        )
    }
    

}

// 把store里的数据映射到组件里的props
const mapStateToProps = (state) => {
    // 映射数据
    return {
        inputValue: state.inputValue,
        list:state.list
    }
}
// store.dispatch 将dispatch挂载到props中 ,可以通过props对store做修改
const mapDispatchToProps = (dispatch) => {
    return {
        // 修改store中的数据
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick(){
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        }
    }
}
// connect 表示连接 这里是 todolist 和store做连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
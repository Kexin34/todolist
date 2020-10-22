import React, { Component } from 'react';
import { connect } from 'react-redux';
// Todo:
//1. actionCreator 2. actionTypes
//onClick={this.props.handleDelete}

// 无状态函数，只做渲染
const TodoList = (props) => {
    const { inputValue, list, handleInputChange, handleClick } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

// class TodoList extends Component {
//     render() {
//         //简洁代码
//         const { inputValue, list, handleInputChange, handleClick } = this.props;
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={handleInputChange}/>
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return <li key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }


const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        
        handleClick(){
            const action = {
                type: 'add_item'
            }
            // 传给reducer
            dispatch(action);
        }
    }
}
// 数据一旦发生改变，这个自动检测，页面改变
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
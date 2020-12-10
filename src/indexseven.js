import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';

class Counter extends React.Component{
    render(){
        const value = this.props.value;
        const onAddClick = this.props.onAddClick;
        const onDecClick = this.props.onDecClick;
        return (
            <div>
                <h1>计数：{value}</h1>
                <button onClick={onAddClick}>加一</button>
                <button onClick={onDecClick}>减一</button>
            </div>
        )
    }
}

const addAction = {
    type:'add'
}

const decAction = {
    type:'dec'
}

function reducer(state={num:0},action){
    switch(action.type){
        case 'add':
            state.num++;
            break;
        case 'dec':
            state.num--;
            break;
        default:
            break;
    }
    return {...state}
}

const store = createStore(reducer)

function mapStateToProps(state){
    return {
        value:state.num
    }
}

function mapDispatchToProps(dispatch){
    return{
        onAddClick:()=>{dispatch(addAction)},
        onDecClick:()=>{dispatch(decAction)}
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

ReactDom.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector('#root')
)
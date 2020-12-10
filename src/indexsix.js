import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';

const reducer = function(state={num:0},action){
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
    return {...state};
}

const store = createStore(reducer)

function add(){
    store.dispatch({type:'add'})
}

function dec(){
    store.dispatch({type:'dec'})
}

const Counter = function(props){

    let state = store.getState().num;
    return (
        <div>
            <h1>计数数量：{state}</h1>
            <button onClick={add}>加一</button>
            <button onClick={dec}>减一</button>
        </div>
    )
}

ReactDom.render(
    <Counter></Counter>,
    document.querySelector('#root')
)

store.subscribe(()=>{
    ReactDom.render(
        <Counter></Counter>,
        document.querySelector('#root')
    )
})
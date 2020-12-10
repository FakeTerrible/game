import React from 'react';
import ReactDom from 'react-dom';
import reportWebVitals from './reportWebVitals';
class ParentCom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <form action="https://www.baidu.com">
                <button onClick={this.parentEvent}>提交</button>
                <button onClick={(e)=>{this.parentEvent1('msg:helloworld',e)}}>提交</button>
            </form>
            
        )
    }

    parentEvent = (e)=>{
        console.log(e.preventDefault)
        e.preventDefault()
    }
    parentEvent1 = (msg,e)=>{
        console.log(msg)
        console.log(e)
        e.preventDefault()
    }
}

ReactDom.render(
    <ParentCom/>,
    document.querySelector('#root')
)
reportWebVitals();
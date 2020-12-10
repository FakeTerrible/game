import React from 'react';
import ReactDom from 'react-dom';
import reportWebVitals from './reportWebVitals';

class ParentCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isAction:""
        }
        this.setDate = this.setDate.bind(this)
    }
    setDate(msg){
         this.setState({
             isAction:msg
         })
    }
    render(){
        return (
            <div>
                <h1>输出:{this.state.isAction}</h1>
                <ChildrenCom setDate={this.setDate}/>
            </div>
        )
    }
}

class ChildrenCom extends React.Component{
    constructor(props){
        super(props)
        this.sendData = this.sendData.bind(this)
    }
    sendData(){
        this.props.setDate("Hello")
    }
    render(){
        return (
            <div>
                <button onClick={this.sendData}>点击改变父元素</button>
            </div> 
        )
    }
}

ReactDom.render(
    <ParentCom/>,
    document.querySelector('#root')
)
reportWebVitals();

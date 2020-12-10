import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num:0
        }
    }

    add = ()=>{
        this.setState({
            num:this.state.num+1
        })
    }

    dec = ()=>{
        this.setState({
            num:this.state.num-1
        })
    }

    render(){
        console.log(this.state.num)
        return (
            <div>
                <h1>计数：{this.state.num}</h1>
                <button onClick={this.add}>加一</button>
                <button onClick={this.dec}>减一</button>
           </div>
        )
    
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
)
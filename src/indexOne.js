import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// function clock(){
// let element = <div>
//     <h1>现在的时间：{new Date().toLocaleTimeString() }</h1>
//     <p>待办事项：</p>
//     </div>

// ReactDOM.render(element,document.querySelector('#root'));
// }
// clock();
// setInterval(clock,1000);

// function Clock(props){
//     return (
//     <div>
//         <h1></h1>
//         <h1>现在的时间：{props.date.toLocaleTimeString() }</h1>
//         <p>待办事项：</p>
//         <h2>{man === '发热' ? <button>隔离</button>:<button>回家</button>}</h2>
//     </div>
//     )
// }
// function run(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.querySelector('#root')
//     )
// }

// setInterval(run, 1000);
// let exampleStyle = {
//     background:"skyblue",
//     borderBottom:"1px solid red"
// }

// let element = (
//     <div>
//         <h1 style={exampleStyle}>helloworld</h1>
//     </div>
// )

// ReactDOM.render(
//     element,
//     document.querySelector('#root')
// )

// function Childcom(){
//     let title = <h2>我是大哥</h2>
//     let weather = "下雨"
//     let isGo = weather == "下雨"? "不出门":"出门"
//     return (
//         <div>
//             {title}
//             <h1>helloworld</h1>
//             <div>
//                 是否出门?
//                 <span>{isGo}</span>
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Childcom/>,
//     document.querySelector('#root')
// )

// class Clock extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             time:new Date().toLocaleTimeString()
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>当前时间：{this.state.time}</h1>
//             </div>
//         )
//     }
//     componentDidMount(){
//         setInterval(()=>{
//             // this.state.time = new Date().toLocaleTimeString();
//             this.setState({
//                 time:new Date().toLocaleTimeString()
//             })
//         },1000)
//     }
// }

// ReactDOM.render(
//     <Clock/>,
//     document.querySelector('#root')
// )


// class Tab extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             isAction:""
//         }
//     }
//     changeOne = ()=>{
//         this.setState({
//             isAction:"内容一"
//         })
//     }
//     changeTwo = ()=>{
//         this.setState({
//             isAction:"内容二"
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <button onClick={this.changeOne}>内容一</button>
//                 <button onClick={this.changeTwo}>内容二</button>
//                 <div className="content">
//                     <h1>{this.state.isAction}</h1>
//                 </div>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Tab/>,
//     document.querySelector('#root')
// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

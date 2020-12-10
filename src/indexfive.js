import React from 'react';
import ReactDom from 'react-dom';
import songData from './Song.json'

class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li onClick={(e)=>{this.getAlert(this.props.item,e)}}>{this.props.item}
            </li>
        )
    }

    getAlert=(item,e)=>{
        alert(item)
    }
}

class Welcom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr : songData.data.channels.artist
        }
    }

    render(){
        let element = this.state.arr.map((item)=>{
            return (
                <Item item={item.name}></Item>
            )
        })
        return (
            <div>
                <ul>
                   {element} 
                </ul>
            </div>
        )
    }
}

ReactDom.render(
    <Welcom/>,
    document.querySelector('#root')
)
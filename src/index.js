import React from 'react';
import ReactDom from 'react-dom';
import {Game} from './components/Game/game';
import './game.css';


ReactDom.render(
    <Game/>,
    document.querySelector('#root')
)
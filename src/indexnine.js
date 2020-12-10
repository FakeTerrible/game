import React,{ useState } from 'react';
import ReactDom from 'react-dom';

function Example(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>加一</button>
            <button onClick={()=>setCount(count-1)}>减一</button>
        </div>
    )
}

ReactDom.render(
    <Example/>,
    document.querySelector('#root')
)
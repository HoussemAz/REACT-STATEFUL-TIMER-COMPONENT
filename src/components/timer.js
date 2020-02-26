import React from 'react'

export default function timer(sec) {
    sec=8302
        var x=Math.floor(sec/3600);
        var y=Math.floor((sec%3600)/60);
        var z=(sec%60);
        if(x<10){x="0"+x};
        if(y<10){y="0"+y};
        if(z<10){z="0"+z};
     
       
    return (
        <div className='time'>
            <h1>{x+":"+y+":"+z}</h1>
        </div>
    )
 }

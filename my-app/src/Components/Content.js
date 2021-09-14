import React from 'react'

function Content() {
    let Cities=['İstanbul','Ankara','Ordu','Bursa'];
    return (
        <div>
            {
                Cities.map((item,key)=>(<li>{item}</li>))
            }
        </div>
    )
}

export default Content

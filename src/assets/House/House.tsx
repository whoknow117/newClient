import React from 'react'


export type HouseType = {

}

const House:React.FC<HouseType> = () => {
    const electricStyles = {
        width: '34px',
    }
    return <div style={electricStyles}>



        <svg data-name="Layer 2" id="Layer_2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs> </defs><title/><path  d="M30,15a1,1,0,0,1-.58-.19L16,5.23,2.58,14.81a1,1,0,0,1-1.16-1.62l14-10a1,1,0,0,1,1.16,0l14,10A1,1,0,0,1,30,15Z"/><path   d="M5,9A1,1,0,0,1,4,8V4A1,1,0,0,1,5,3H9A1,1,0,0,1,9,5H6V8A1,1,0,0,1,5,9Z"/><path   d="M25,29H20a1,1,0,0,1-1-1V21H13v7a1,1,0,0,1-1,1H7a3,3,0,0,1-3-3V16a1,1,0,0,1,2,0V26a1,1,0,0,0,1,1h4V20a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v7h4a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V26A3,3,0,0,1,25,29Z"/></svg>



    </div>
}

export default House;
import React from 'react'


export type BasketType = {

}

const Basket:React.FC<BasketType> = () => {
    const electricStyles = {
        width: '34px',
    }
    return <div style={electricStyles}>


        <svg   viewBox="0 0 30 30"  xmlns="http://www.w3.org/2000/svg"><path d="M11.5 7h7c.277 0 .5.223.5.5s-.223.5-.5.5h-7c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-7 0c-.824 0-1.422.694-1.498 1.45l-2 20C.914 29.33 1.676 30 2.5 30h25c.824 0 1.586-.672 1.498-1.55l-2-20C26.922 7.695 26.324 7 25.5 7h-3c-.67 0-.65 1 0 1h3c.284 0 .467.204.502.55l2 20c.023.225-.218.45-.502.45h-25c-.284 0-.525-.225-.502-.45l2-20c.035-.346.218-.55.502-.55h3c.67 0 .654-1 0-1zM15 0c-3.308 0-6 2.692-6 6v4.5c0 .665 1 .665 1 0V6c0-2.767 2.233-5 5-5s5 2.233 5 5v4.5c0 .665 1 .657 1 0V6c0-3.308-2.692-6-6-6z"/></svg>

    </div>
}

export default Basket;
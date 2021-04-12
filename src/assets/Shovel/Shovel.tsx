import React from 'react'


export type ShovelType = {

}

const Shovel:React.FC<ShovelType> = () => {
    const shovelStyles = {
        width: '34px',
    }
    return <div style={shovelStyles}>

        <svg enable-background="new 0 0 100 100"   id="Layer_1" version="1.0" viewBox="0 0 100 100"     ><path d="M49.521,69.336l-7.07-7.07l35.762-35.765l7.073,7.07L90,28.857L71.143,10l-4.714,4.714l7.07,7.073L37.737,57.552  l-7.073-7.073c-1.302-1.302-3.411-1.302-4.714,0l-8.047,8.047C12.637,63.789,10.007,70.7,10,77.607  c-0.003,3.522,0.69,7.024,2.054,10.342c3.305,1.36,6.813,2.054,10.339,2.051c6.901-0.003,13.812-2.64,19.082-7.903l8.047-8.047  C50.82,72.751,50.827,70.638,49.521,69.336z"/></svg>

    </div>
}

export default Shovel;
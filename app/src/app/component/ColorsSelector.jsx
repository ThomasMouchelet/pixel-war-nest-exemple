import { useState } from 'react';
import { SliderPicker } from 'react-color';

const ColorsSelector = ({color, setColor}) => {

    const handleChangeComplete = (color) => {
        console.log(color);
        setColor(color.hex);
    };

    return ( 
        <div>
            <SliderPicker 
                color={ color }
                onChangeComplete={ handleChangeComplete }
                onChange={ handleChangeComplete }
            />
        </div>
     );
}
 
export default ColorsSelector;
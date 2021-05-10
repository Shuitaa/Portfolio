import { useEffect, useRef } from "react";

function SliderItem(){

    let item = useRef()

    useEffect(()=>{
        if(item.current.offsetLeft < 614 - (item.current.offsetWidth + 20))
            console.log(true);
    }, [])

    return (
        <li className="slideritem" ref={item} >
            <button className="slideritem__container">
                <div className="slideritem__img">
                    <img src="dino.JPG" alt="" />
                </div>
                <span>dinoeazezaezakorofkazok</span>
            </button>
        </li>
    )
}

export default SliderItem;
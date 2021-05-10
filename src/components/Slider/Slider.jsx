import { useEffect, useRef, useState } from 'react';
import SliderItem from './SliderItem'

function Slider(){

    let list = useRef()

    let [val, setVal] = useState(0);
    let [status, setStatus] = useState("right")

    useEffect(()=>{

    }, [status]);

    function processDistance(){
        let lastChild = list.current.lastChild;
        let dist = lastChild.offsetLeft - (614 - (lastChild.offsetWidth + 20));
        let click = Math.ceil(dist/((dist*18.85)/100));

        return dist/click;
    }

    function onSlide(event){
        const lastChildLeft = list.current.lastChild.offsetLeft;
        const listSize = list.current.offsetWidth;

        setVal(event.target.classList.contains("slider__icon-left") 
            ? val+=processDistance()
            : val-=processDistance());

        if(val === 0) setStatus("right")
        else if((-val + listSize) >= lastChildLeft) setStatus("left")
        else setStatus("both")
            
        list.current.style.transition = "transform 0.6s ease";
        list.current.style.transform = `translateX(${val}px)`;

        return true;
    }


    return (
        <div className="slider">
            {(status === "left" || status ==="both")
                && <div className="slider__icon-left" onClick={onSlide}></div>}
            <ul ref={list}>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>

            </ul>
            {(status === "right" || status ==="both")
                && <div className="slider__icon-right" onClick={onSlide}></div>}
        </div>
    )
}

export default Slider;
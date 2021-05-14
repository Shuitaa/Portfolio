import ProfilePicture from "../ProfilePicture";

function SliderItem(){

    return (
        <li className="slideritem">
            <button className="slideritem__container">
                <ProfilePicture size="64"/>
                <span>dinoeazezaezakorofkazok</span>
            </button>
        </li>
    )
}

export default SliderItem;
function ProfilePicture(props){
    return (
        <div className={props.type === "nav" 
            ? `navitem profilepicture__container-${props.size}` 
            : `profilepicture__container-${props.size}`}>
            <img src="dino.JPG" alt="" className="profilepicture__img"/>
        </div>
    )
}

export default ProfilePicture;
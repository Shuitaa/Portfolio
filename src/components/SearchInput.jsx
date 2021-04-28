import { useState, useRef, useEffect } from "react";

function SearchInput() {

  const [isFocused,setIsFocused] = useState(false);
  const [value, setValue] = useState("Search");

  const input = useRef(null);

  useEffect(()=>{
    if(input.current) input.current.focus();
  },[isFocused])

  function onFocus(){
    if(isFocused) return false;
    setIsFocused(true);
  }

  function onExit(event){
    if(event.target === input.current) return false;
    if(isFocused) setIsFocused(false);
  }

  function onChange(){
    let val = input.current.value;
    setValue(val);
  }

  return (
    <div className="search" onClick={onFocus} onBlur={onExit}>
      <div className="search__container">
        <div>
          {isFocused 
            ? <>
                <span className="search__icon--focus"></span>
                <input type="text" className="search__input" placeholder={value} onChange={onChange} ref={input}/>
                <span className="cancel__icon--focus" onClick={onExit}></span>
              </>
            : <>
                <span className="search__icon"></span>
                <span>{value}</span>
              </>}
        </div>
      </div>
      <div className="results"></div>
    </div>
  );
}

export default SearchInput;

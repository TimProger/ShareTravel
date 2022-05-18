import React from 'react';
import './Search.css'
import {ISearchProps} from "../../../types/searchType";
import Dropdown from "./Dropdown/Dropdown"
import { FiSearch } from 'react-icons/fi';

const Search: React.FC<ISearchProps> = (props) => {
    const [isDisplayed, setIsDisplayed] = React.useState(false)
    const [text, setText] = React.useState("");

    React.useEffect(()=>{
        return function (){
            document.removeEventListener("click", clickHandler);
            document.removeEventListener("keydown", clickHandler);
        }}, [])

    const changeHandler =(e:any)=>{
        setText(e.target.value)
        props.filterUsers(e.target.value)
    }

    const ref = React.useRef<null | any>(null);
    const focusHandler = () => {
        setIsDisplayed(true);
        document.addEventListener("click", clickHandler);
        document.addEventListener("keydown", clickHandler);
      };
    
    const clickHandler = (e:any) => {
            if(!ref.current.contains(e.target) || e.key == "Enter") {
                if(e.key == "Enter"){
                    e.target.blur()
                }
                setIsDisplayed(false);
                document.removeEventListener("click", clickHandler);
                document.removeEventListener("keydown", clickHandler);
        }
    }
    // Проверяю статус ошибки
    if (props.error) {
        return <h1>{props.error}</h1>
    }

    return (
        <div className={'searchContainer'}>
            <div className='search' onFocus={focusHandler} ref={ref}>
                <input type="text" onChange={changeHandler} value={text} placeholder='Поиск пользователя...' className='searchBar'/>
                <FiSearch className='icon'/>
            </div>
            {isDisplayed?<div className="dropdown">
                {props.users.length?props.users.slice(0, 10).map(el=><Dropdown key={el.login.uuid} user={el}/>):<></>}
            </div>:<></>}
        </div>
    );
};


export default Search;

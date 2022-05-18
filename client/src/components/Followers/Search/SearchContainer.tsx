import React from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import Search from "./Search";

const SearchContainer = () => {
    // Получение пользователей, ошибки и статуса загрузки
    const {theme} = useTypedSelector(state => state.profile)
    const {follows, followers, error, loading} = useTypedSelector(state => state.user)
    const [filtered, setFiltered] = React.useState([...follows, ...followers])
    const filterUsers =(value:any)=>{
        setFiltered([...follows, ...followers].filter(el=>(el.name.first + " " + el.name.last).includes(value)))
        console.log(filtered)
    }

    return <Search
                      users={filtered}
                      error={error}
                      loading={loading}
                      filterUsers={filterUsers}
                      theme={theme}

    />;
};

export default SearchContainer;

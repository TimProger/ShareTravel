import {IUser} from "./userType"

export interface ISearchProps {
    users: IUser[] | any[];
    error: null | string;
    loading: boolean;
    filterUsers: (value:any)=>void
    theme:string;
}

export interface IDropdownProps {
    user: IUser | any;
}

import { createContext } from "react";


export const SearchStatusContext = createContext({searchStatus:false, setSearchStatus: (s:boolean) => {}})

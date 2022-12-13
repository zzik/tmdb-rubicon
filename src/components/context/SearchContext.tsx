import { createContext } from "react";
import {environment} from '../utils'

export const SearchContext = createContext({searchPhrase:`${environment.url}`, setSearchPhrase: (phrase: string) => {}})

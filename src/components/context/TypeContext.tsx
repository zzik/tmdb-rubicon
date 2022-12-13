import { createContext } from "react";


export const TypeContext = createContext({contentType:'movie', setContentType: (type: string) => {}})

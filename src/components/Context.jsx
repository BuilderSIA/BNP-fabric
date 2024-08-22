/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { collections } from "../data/data";

export const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const [data,setData] = useState(collections)

    const {t,i18n} = useTranslation();

    const handleChange = (event) =>{
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);


    }


    console.log(data);
    
    

    return(
        <AppContext.Provider value={{
            t,handleChange,
            data,setData
        }}>
            {children}
        </AppContext.Provider>
    )
}



export const UseGlobalContext = ()=>{
    return useContext(AppContext)
}
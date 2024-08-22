/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { collections } from "../data/data";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const [data,setData] = useState(collections)

    const {t,i18n} = useTranslation();

    const handleChange = (event) =>{
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);


    }


    const sendMsg = (name)=>{
        const token = '7157344958:AAHLka3iQnKDPjyvobBZQrDB_Yd82wrFyuw';
        const chat_id =958496624;
        const url = `https://api.telegram.org/bot/${token}/sendMesssage`;
        
        
        axios({
            url:url,
            method:"POST",
            data:{
                "chat_id":chat_id,
                "text":name
            }
        }).then((res)=>{
            toast.done("Done")
        }).catch((error)=>{
            toast.error("Error")
            
        })
    }

    console.log(data);
    
    

    return(
        <AppContext.Provider value={{
            t,handleChange,
            data,setData,sendMsg
        }}>
            {children}
        </AppContext.Provider>
    )
}



export const UseGlobalContext = ()=>{
    return useContext(AppContext)
}
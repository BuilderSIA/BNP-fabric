import i18n from 'i18next';



import uztranslation from '../public/locales/uzb.json';
import rutranslation from '../public/locales/rus.json';
import entranslation from '../public/locales/eng.json';
import I18NextHttpBackend from 'i18next-http-backend';
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


const currentLang = localStorage.getItem("i18nextLng") || "uz"

i18n
.use(I18NextHttpBackend)
.use(i18nextBrowserLanguagedetector)
.use(initReactI18next)
.init({
    fallbackLng:'uz',
    lng:currentLang,
    debugger:true,
    resources:{
        uz:{translation:uztranslation},
        ru:{translation:rutranslation},
        en:{translation:entranslation}
    }
})



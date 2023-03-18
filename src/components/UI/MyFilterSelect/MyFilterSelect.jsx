import React, {useState} from 'react'
import cl from './MyFilterSelect.module.css'
import { useDispatch, useSelector } from 'react-redux';

export default function MySelect({ setInfoSelect, infoSelect, }) {
    const dispatch = useDispatch()
    const [isSelect, setIsSelect] = useState(false)
    
    return (
    <div className={cl.blockSelect}>
        <div className={cl.headSelect}  onClick={e=>setIsSelect(!isSelect)}>
           {infoSelect.filter(e=>e.active)[0].text}
            <span className={cl.headArrow}>
                <svg width="20" height="20" viewBox="0 0 383 666" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6501 14.8005C5.27652 24.1768 0.0107422 36.8922 0.0107422 50.1505C0.0107422 63.4087 5.27652 76.1241 14.6501 85.5005L262.15 333L14.6501 580.501C5.54217 589.931 0.502428 602.561 0.616349 615.671C0.73027 628.78 5.98873 641.321 15.2591 650.591C24.5295 659.862 37.0702 665.12 50.18 665.234C63.2898 665.348 75.9199 660.308 85.35 651.2L368.2 368.35C377.574 358.974 382.839 346.259 382.839 333C382.839 319.742 377.574 307.027 368.2 297.65L85.35 14.8005C75.9737 5.4269 63.2583 0.161133 50.0001 0.161133C36.7419 0.161133 24.0265 5.4269 14.6501 14.8005Z" fill="#acacac"/>
                </svg>
            </span>
        </div>
        <div  className={isSelect ? [cl.bodySelect, cl.activeSelect].join` ` :cl.bodySelect}>
            <div className={cl.bodyContent}>
                <ul className={cl.listBody}>
                    {infoSelect.filter((e,i)=>!e.active).map((e,i)=>{
                        return (
                            <React.Fragment key={i}>
                                <li className={cl.itemSelect} onClick={event=>{dispatch(setInfoSelect({id:e.id}));setIsSelect(false)}}> 
                                    <span>{e.text}</span> <span className={e.active ? [cl.checkSign, cl.activeSign].join` ` :cl.checkSign}></span>
                                </li>
                            </React.Fragment>
                        )
                    })}
                </ul>    
            </div>            
        </div>
    </div>
  )
}

import { useEffect } from 'react';
import { useState } from 'react';
import a from './stF.module.css'
function OtFilm(props){
    if(props.countr[0].country.includes(props.sost)  ){
        return(
            <div class={a.div_f}>
                <h2>{props.inf}</h2>
     
                <img class={a.im} src={props.pfoto}></img>
    
                
            </div>
        )
    }

   


}

export {OtFilm}
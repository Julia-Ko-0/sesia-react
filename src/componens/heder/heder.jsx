import a from "./h.module.css"
function CrHeder(props){
    // function Poisk(){
    //     console.log(props.ms)
    //     let impPoisk = document.getElementById('impPoisk')
    //     impPoisk.addEventListener('keydown',(ev)=>{
    //         if(ev.key === "Backspace"){
    //             props.f(props.ms)
    //         }
    //     })
    //     if('' != impPoisk.value){
    //         let NewChat = props.ms.filter(a=> a.nameRu.includes(impPoisk.value))
    //         props.f(NewChat)
    //     }
    // }
    return(
        <div class={a.d_h}>
            <h1>Кинопоиск</h1>
            <input id="impPoisk" onInput={(e)=>{
                // console.log(e.target.value)
                props.f(e.target.value)
            }} class={a.in_p} placeholder="Поиск"></input>
        </div>
    )
}
export{CrHeder}
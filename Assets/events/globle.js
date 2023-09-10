import { globalState } from "../../js/app.js";
import { ROOT_DIV } from "../helper/constant.js";

function globalEvent() {
    ROOT_DIV.addEventListener("click",function (event){
        if(event.target.localName == "img"){
            const clickedId = event.target.parentNode.id;
            const flatArray = globalState.flat()
            const square  = flatArray.find(el => el.id == clickedId)
            
        }
    })
}

export {globalEvent}
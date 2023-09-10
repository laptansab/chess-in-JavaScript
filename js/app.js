import { initGame } from "../Assets/data/data.js";
import { initGameRender } from "../Assets/render/main.js";
import { globalEvent } from "../Assets/events/globle.js";

//will be usefull till game end
const globalState = initGame()

initGameRender(globalState);

globalEvent()

export {globalState}

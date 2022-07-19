import { LUA_CHON, PLAY_GAME } from "../ConstantHook/XucXacConstantHook"


export let luaChonAction = (luaChon) => { 
    return {
        type: LUA_CHON,
        payload: luaChon
    }
 }

export let playGameAction = () => { 
    return {
        type: PLAY_GAME
    }
 }
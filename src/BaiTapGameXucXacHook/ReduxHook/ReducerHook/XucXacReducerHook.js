import { randomIntFromInterval } from "../../XucXacUtilHook";
import { LUA_CHON, PLAY_GAME, Tai, Xiu } from "../ConstantHook/XucXacConstantHook";

let initialState = {
    mangXucXac: [
        {
            giaTri: 3,
            img: "./img/imgXucSac/3.png",
        },
        {
            giaTri: 3,
            img: "./img/imgXucSac/3.png",
        },
        {
            giaTri: 3,
            img: "./img/imgXucSac/3.png",
        }
    ],
    luaChon: null,
    luotThang: 0,
    luotChoi: 0,
};

export let XucXacReducerHook = (state = initialState, { type, payload }) => {
    switch (type) {
        case LUA_CHON: {
            state.luaChon = payload;
            console.log(payload);

            return { ...state }
        }

        case PLAY_GAME: {
            let tongDiem = 0;
            let mangXucXacClone = state.mangXucXac.map((value) => {
                let randomNum = randomIntFromInterval(1, 6);
                tongDiem += randomNum;
                return {
                    giaTri: randomNum,
                    img: `./img/imgXucSac/${randomNum}.png`
                }
            });

            let ketQua = tongDiem >= 11 ? Tai : Xiu;

            let luotChoiClone = state.luotChoi + 1;

            let luotThangClone =
                state.luaChon == ketQua
                    ? state.luotThang + 1
                    : state.luotThang;

            state.mangXucXac = mangXucXacClone;
            state.luotChoi = luotChoiClone;
            state.luotThang = luotThangClone;

            console.log(state);
            return { ...state }
        }

        default:
            return { ...state }
    };
};
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playGameAction } from './ReduxHook/ActionHook/XucXacActionHook';

export default function KetQuaXucXacHook(props) {

    let { luaChon, luotChoi, luotThang } = useSelector(state => state.XucXacReducerHook);
    let dispatch = useDispatch();

    return (
        <div className='container' style={{ margin: "auto", textAlign: "center", fontWeight: "bold", fontSize: "50px" }}>
            <div className='text-success'>
                Lua chon: {luaChon}
            </div>
            <div className='text-danger'>
                So luot thang: {luotThang}
            </div>
            <div className='text-primary'>
                So luot choi: {luotChoi}
            </div>
            <button
                className='btn btn-warning btn-lg my-5'
                onClick={() => {
                    dispatch(playGameAction())
                }}
            >Lets play</button>
        </div>
    )
};
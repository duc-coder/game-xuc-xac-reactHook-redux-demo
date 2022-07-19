import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { luaChonAction } from './ReduxHook/ActionHook/XucXacActionHook'
import { Tai, Xiu } from './ReduxHook/ConstantHook/XucXacConstantHook'

export default function GameXucXacHook(props) {
    let mangXucXac = useSelector(state => state.XucXacReducerHook.mangXucXac);

    let dispatch = useDispatch();
    return (
        <div>
            <div className='container'>
                <h1 style={{margin: "auto", textAlign: "center", fontWeight: "bold", fontSize: "50px", marginBottom: "50px"}}>Bai Tap Game Xuc Xac</h1>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button
                        className='btn btn-danger'
                        style={{ width: "200px", height: "200px", fontSize: "50px" }}
                        onClick={() => {
                            dispatch(luaChonAction(Tai))
                        }}
                        >Tai</button>
                    <div>
                        {mangXucXac?.map((item) => {
                            return <img style={{ width: "100px", marginTop: "50px" }} src={item.img} alt="" />
                        })}
                    </div>
                    <button
                        className='btn btn-dark'
                        style={{ width: "200px", height: "200px", fontSize: "50px" }}
                        onClick={() => {
                            dispatch(luaChonAction(Xiu))
                        }}
                        >Xiu</button>
                </div>

            </div>
        </div>
    )
};

// let mapStateToProps = (state) => {
//     return {
//         mangXucXac: state.XucXacReducer.mangXucXac
//     }
// };

// let mapDispatchToProps = (dispatch) => {
//     return {
//         handleLuaChon: (luaChon) => {
//             dispatch(luaChonAction(luaChon))
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(GameXucXacHook);

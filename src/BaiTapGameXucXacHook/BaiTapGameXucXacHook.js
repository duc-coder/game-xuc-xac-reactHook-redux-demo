import React from 'react'
import GameXucXacHook from './GameXucXacHook'
import KetQuaXucXacHook from './KetQuaXucXacHook'

export default function BaiTapGameXucXacHook() {
  return (
    <div className='bg_game'
      style={{
        backgroundImage: `url(./img/imgXucSac/bgGame.png)`,
        height: "100vh",
      }}>
      <GameXucXacHook />
      <KetQuaXucXacHook />
    </div>
  )
}

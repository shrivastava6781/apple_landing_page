import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacBook from './MacBook'
import { div } from 'three/webgpu'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <div className='navbar line flex gap-10 absolute pt-4 pb-2 top-1 left-1/2 -translate-x-1/2'>
        {["iphone", "ipad", "services", "iphone", "ipad", "services", "iphone", "ipad", "services"].map(e =>
          <a href='' className='text-white font-["500"] capitalize'>{e}</a>
        )}

      </div>
      <div className='absolute flex flex-col items-center top-32 left-1/2 text-white -translate-x-1/2 font-["Helvetica_Now_Display"]'>
        <h3 className='text-7xl tracking-tighter font-[700]'>macbook pro.</h3>
        <h5>oh so pro !</h5>
        <p className='text-center w-3/4'> As you scroll, watch the 3D model of the MacBook Pro come to life, opening up to reveal the screen.
        </p>
      </div>
      <Canvas camera={{ fov: 14, position: [0, -10, 220] }}>
        {/* <OrbitControls /> */}
        <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr"]} />
        <ScrollControls>
          <MacBook />
          {/* <MacContainer/> */}
        </ScrollControls>
      </Canvas>
      <div className='absolute flex flex-col items-center bottom-32 left-1/2 text-white -translate-x-1/2 font-["Helvetica_Now_Display"]'>
        <h5>ADITYA SHRIVASTAVA 🍀</h5>
      </div>

    </div>

  )
}

export default App

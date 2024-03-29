import React from 'react'
import { Html, useProgress } from '@react-three/drei'
import { progress } from 'framer-motion'

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html
      as='div'
      center
      style={
        {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        }
      }
    >
      <span className='canvas-loader'></span>
      <p style={{
        fontSize: 14,
        color: 'white',
        fontWeight:800, 
        marginTop:40
      }}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './components/Hero'
import Bottom from './components/Bottom'
import { useMediaQuery } from 'react-responsive';


function App() {
  // const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  // let className;
  // if(!isLargeScreen){
  //   className = 'width: 640px'
  // }
  return (
    <div>
      <Hero></Hero>
      <Bottom></Bottom>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card'

function App({username, post}) {
    
  return (
    <>
      <h1 className="text-3xl bg-fuchsia-300 font-extrabold underline">
      React using Vite and  tailwind
    </h1>
    <Card />
    <Card username='Rahul' post = 'full stack developer'/>
    <Card username='Prashant'post = 'backend developer'/>
    </>
  )
}

export default App

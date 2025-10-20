import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcons'
import { ShareIcon } from './icons/ShareIcon'


function App() {

  return (
    <>
      <Button variant="primary" size="sm" text="Click me" onClick={ ()=>{} }></Button>
      <Button variant="primary" size="md" text="Click me" onClick={ ()=>{} } startIcon={<ShareIcon size={"md"}/>}></Button>
      <Button variant="secondary" size="lg" text="Tap me" onClick={ ()=>{} } startIcon={<PlusIcon size='lg'/>}></Button>
    </>
  )
}

export default App

import { useRef, useState } from 'react'
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../icons/PlusIcons'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModel } from '../components/ui/CreateContentModel'
import { useOnClickOutside } from '../hooks/useOnOutsideClick'
import { SideBar } from '../components/ui/SideBar'


export function Dashboard(){
    
      const [modelOpen,setModelOpen] = useState(false);
      const ref = useRef(null)
      useOnClickOutside(ref, () => setModelOpen(false));

    return <>
    <SideBar></SideBar>
    <div className='p-4 ml-72 bg-gray-100 min-h-screen ' >
      <div ref = {ref}>
      <CreateContentModel  open={modelOpen} onClosed={ ()=>{setModelOpen(false)}}></CreateContentModel>
      </div>
      <div className='flex justify-end' >
      <Button variant="primary" size="md" text="Add Content" onClick={ ()=>{setModelOpen(true)} } startIcon={<PlusIcon size='lg'/>}></Button>
      <Button variant="secondary" size="md" text="Share ur Twin" onClick={ ()=>{} } startIcon={<ShareIcon size={"md"}/>}></Button>
      </div>
      <div className='flex gap-4'>
      <Card type='twitter' link='https://twitter.com/adxtyahq/status/1980126365279240402' title='BlockChain Intern'></Card>
      <Card type='youtube' link='https://www.youtube.com/watch?v=_zYqdyX1ZTo&list=RD_zYqdyX1ZTo&start_radio=1' title='Podcast'></Card>
      </div>
      </div>
    </>
}
import { useEffect, useRef, useState } from 'react'
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../icons/PlusIcons'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModel } from '../components/ui/CreateContentModel'
import { useOnClickOutside } from '../hooks/useOnOutsideClick'
import { SideBar } from '../components/ui/SideBar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'



export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  return <div>
    <SideBar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
      <CreateContentModel open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />
      <div className="flex justify-end gap-4">
        <Button onClick={() => {
          setModalOpen(true)
        } } variant="primary" text="Add content" startIcon={<PlusIcon size='md'/>} size={'md'}></Button>
        <Button onClick={async () => {
          const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
            share: true
          }, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
          })
          console.log(response.data.message);
          
          const shareUrl = `${response.data.message}`
          alert(shareUrl)
        } } variant="secondary" text="Share brain" startIcon={<ShareIcon size='md'/>} size={'md'}></Button>
      </div>

      <div className="flex gap-4 flex-wrap">
        {contents.map(({title, link, type}) => <Card 
            title={title}
            link={link}
            type={type}
        />)}
      </div>
    </div>
  </div>
}
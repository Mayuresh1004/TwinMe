import { Logo } from "../../icons/Logo"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { SideBarItem } from "./SideBarItems"


export function SideBar(){
    return <div className="w-72 h-screen border-r fixed left-0 top-0 pl-6 ">

        <div className="flex text-2xl pt-2 pl-6 items-center">
            
            <div className=" pr-2 text-purple-600 ">
                <Logo size="lg"></Logo>
            </div>

            TwinMe

        </div>

        <div className="pt-4 ">
        <SideBarItem text="Twitter" icon={<TwitterIcon size="lg"/>} ></SideBarItem>
        <SideBarItem text="Youtube" icon={<YoutubeIcon size='lg' />} ></SideBarItem>
        </div>
    </div>
}
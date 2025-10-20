export function SideBarItem({text,icon}:{text:string,icon: ReactElement}){
    return <div className="flex p-2 m-2 text-gray-700 items-center space-x-4 hover:bg-gray-100 rounded cursor-pointer">
        
        <div className="p-2">{icon}</div>
        <div className="p-2">{text}</div>

    </div>
}
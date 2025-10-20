import axios from "axios";
import { NoteIcon } from "../../icons/NoteIcon"
import { ShareIcon } from "../../icons/ShareIcon";
import { TrashIcon } from "../../icons/TrashIcon";
import { BACKEND_URL } from "../../config";

interface cardProps{
    title: string;
    link: string;
    type: 'twitter' | "youtube" 
}

export function Card(props: cardProps){

    // function deleteCard(){
    //     axios.delete(`${BACKEND_URL}/api/v1/content`, {
    //         data: {
    //             contentId: props.link
    //         },
    //         headers: {
    //             "Authorization": `Bearer ${localStorage.getItem("token")}`
    //         }
    // }).then(() => {
    //     window.location.reload();
    // })

    return <div>
        <div className="bg-white rounded-md  outline-slate-200 p-4 max-w-72 border-gray-200 border">
            <div className="flex justify-between items-center">
                <div className="flex items-center font-semibold text-md">
                    <div className="text-gray-500 pr-2">
                    <NoteIcon></NoteIcon>
                    </div>
                    {props.title}
                </div>
                <div className="flex">
                <div className="flex text-gray-500 pr-2">
                    <a href={props.link} target="_blank" ><ShareIcon size="md"></ShareIcon></a>
                </div>
                <div className=" text-gray-500">
                    <TrashIcon  size="md"></TrashIcon>
                </div>
                </div>
            </div>
            <div className="pt-4">

                {props.type === 'youtube' && (
                <iframe
                    className="w-full"
                    src={props.link.replace("watch?v=", "embed/")}
                    title={props.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                )}    
                {props.type === 'twitter' && <blockquote className="twitter-tweet">
                    <a href={props.link}></a>
                </blockquote> 
                }
            
                 
                </div>
        </div>


    </div>
}
import { useRef } from "react"
import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import { useOnClickOutside } from "../../hooks/useOnOutsideClick"


export function CreateContentModel({open,onClosed}) {

    const modelRef = useRef(null)
    useOnClickOutside(modelRef, onClosed);

    return <div>
    { open && <div className="w-screen h-screen backdrop-blur-xl fixed top-0 left-0 flex justify-center items-center">
        <div className="bg-white p-4 rounded border-slate-300 border"  ref = {modelRef}>
           <div className="flex justify-end">
            <button
                onClick={onClosed}
                className="p-1 rounded hover:bg-gray-100 cursor-pointer"
            >
                <CrossIcon size="lg" />
            </button>
            </div>

            <div>
                <Input placeholder={"Title"}  ></Input>
                <Input placeholder={"Link"}  ></Input>
                <div className="flex justify-center">
                <Button variant="primary" text="Submit" size="md"></Button>
                </div>
            </div>
        </div>
    </div>}
    </div>

}

export function Input({ref, placeholder}:{placeholder:string, ref:any}){
    return <div>
        <input type="text" placeholder={placeholder} className="px-4 py-2 border rounded m-2" ref={ref} />
    </div>
}
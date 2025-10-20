import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export function SignUp(){

    const usernameRef = useRef<HTMLInputElement>()
    const emailRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate();
    
    async function signup(){
        const username = usernameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
            
                username,
                email,
                password
            
        })
        alert("User signed up successfully")

    }

    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        
        <div className="bg-white tounded border min-w-48 p-8 rounded-xl" >
            <h1 className="flex items-center justify-center mb-2 mr-1 font-bold text-2xl">Sign Up</h1>
            <Input ref={usernameRef}  placeholder='Username'   />
            <Input ref={emailRef} placeholder='Email'  />
            <Input ref={passwordRef} placeholder='Password' />
            <div className="flex justify-center pt-4">
            <Button variant="primary" size="md" text="Sign Up" onClick={ signup }  fullWidth={true} loading={false}></Button>
            </div> 
            <div>
                Already a Member? <span onClick={()=> navigate('/signin')} className="text-purple-600 underline cursor-pointer">Sign In Here</span>
            </div>
        </div>
    </div>
}
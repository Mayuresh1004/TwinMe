import axios from "axios";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


export function SignIn(){

    const usernameRef = useRef<HTMLInputElement>()
    // const emailRef = useRef()
    const passwordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate();
    
    async function  signin(){
        const username = usernameRef.current?.value;
        // const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        
        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            
                username,
                // email,
                password
            
        })

        const jwt = response.data.token

        localStorage.setItem("token",jwt)
        navigate('/dashboard')

        // alert("User signed in successfully")
    }


    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white tounded border min-w-48 p-8 rounded-xl flex-col"  >
                        
            <h1 className="flex items-center justify-center mb-2 mr-1 font-bold text-2xl">Sign In</h1>

            <div className='flex justify-center pt-4'>
            <Input ref = {usernameRef} placeholder='Username'  />
            </div>
            {/* <Input placeholder='Email' onChange={()=>{}} /> */}

            <div className='flex justify-center pt-4'>
            <Input ref={passwordRef} placeholder='Password'  />
            </div>
            <div className="flex justify-center pt-4">
            <Button variant="primary" size="md" text="Sign In" onClick={ signin  }  fullWidth={true} loading={false}></Button>


            </div>
            <div>
                Dont have an account? <span onClick={()=> navigate('/signup')} className="text-purple-600 underline cursor-pointer">Sign Up Here</span>
            </div>
        </div>
    </div>
}
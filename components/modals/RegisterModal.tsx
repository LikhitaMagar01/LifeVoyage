import { useCallback, useState } from "react"
import Input from "../components/Input"
import Modal from "../components/Modal"
import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal"
import axios from "axios"
import { toast } from "react-hot-toast"
import { signIn } from "next-auth/react"

const RegisterModal = () =>{
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [username, setUserName] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(async()=> {
        try{
            setIsLoading(true)
            await axios.post('/api/register', {
                email, password, username, name
            })
            toast.success('Account created.')
            signIn('credentials', {
                email,
                password
            });
            registerModal.onClose()
        }
        catch(error){
            toast.error('Something went wrong.')
        }finally{
            setIsLoading(false)
        }
    }, [RegisterModal, email, password, username, name])

    const onToggle = useCallback(()=>{
        if(isLoading){
            return
        }
        registerModal.onClose()
        loginModal.onOpen()
    },[isLoading, registerModal, loginModal])
    
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email} disabled={isLoading} />
            <Input placeholder="Name" onChange={(e)=> setName(e.target.value)} value={name} disabled={isLoading} />
            <Input placeholder="Username" onChange={(e)=> setUserName(e.target.value)} value={username} disabled={isLoading} />
            <Input placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)} value={password} disabled={isLoading} />
        </div>
    )
    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have an account ?</p>
            <span onClick={onToggle} className="text-white cursor-pointer hover:underline">Sign In</span>
        </div>
    )
    return (
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Create an account"
            actionLabel="Register"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal
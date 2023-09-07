import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react"
import Input from "../components/Input"
import Modal from "../components/Modal"

const LoginModal = () =>{
    const loginModal = useLoginModal()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(async()=> {
        try{
            setIsLoading(true)
            // todo add login
            loginModal.onClose()
        }
        catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }, [LoginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email} disabled={isLoading} />
            <Input placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} disabled={isLoading} />
        </div>
    )
    return (
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Sign In"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
        />
    )
}

export default LoginModal
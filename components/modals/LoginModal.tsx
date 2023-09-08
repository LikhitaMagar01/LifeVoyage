import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal"
import { useCallback, useState } from "react"
import Input from "../components/Input"
import Modal from "../components/Modal"

const LoginModal = () =>{
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

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

    const onToggle = useCallback(()=>{
        if(isLoading){
            return
        }
        registerModal.onOpen()
        loginModal.onClose()
    },[isLoading, registerModal, loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email} disabled={isLoading} />
            <Input placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} disabled={isLoading} />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>First time using Life Voyage</p>
            <span onClick={onToggle} className="text-white cursor-pointer hover:underline">Create an account</span>
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
            footer={footerContent}
        />
    )
}

export default LoginModal
import { useRouter } from "next/router"

const FollowBar = () => {
    const router = useRouter()
    return (
        <div className="px-6 py-4 hidden lg:block">
            <div className="bg-neutral-800 rounded-xl p-4">
                <h2 className="text-white text-xl font-semibold">
                    Who to follow
                </h2>
                <div className="flex flex-col gp-6 mt-4">
                    {/* {todo user list} */}
                </div>
            </div>
        </div>
    )
}

export default FollowBar
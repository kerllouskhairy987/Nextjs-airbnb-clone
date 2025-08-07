import { TExploreData } from "@/types"
import Image from "next/image"

type TProps = TExploreData;

const ExploreCard = ({ img, location, distance }: TProps) => {
    return (
        <div className='flex items-center gap-2 cursor-pointer hover:bg-primary/10 hover:scale-105 transition transform duration-200 ease-out'>
            <div className='relative w-16 h-16'>
                <Image src={img ? img : "https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80"} alt='ExploreCard-Img' fill />
            </div>
            <div>
                <h2>{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}

export default ExploreCard
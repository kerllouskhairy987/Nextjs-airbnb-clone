import Image from 'next/image';
import { Button } from '../ui/button';

const Banner = () => {
    return (
        <div className=' relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] '>
            <Image
                src='https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80'
                alt='banner-img'
                className='object-cover object-left'
                fill
            />

            <div className='bg-black/40 absolute inset-0 flex flex-col gap-3 justify-center items-center text-white'>
                <p className='text-sm sm:text-lg '>Not sure where to go? Perfect.</p>
                <Button type='button' className='text-white'> I am flexible</Button>
            </div>
        </div>
    );
};

export default Banner;
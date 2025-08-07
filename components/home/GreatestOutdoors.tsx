import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

const GreatestOutdoors = () => {
    return (
        <section>
            <div className='container relative pt-6'>
                <div className='relative h-96 min-w-[300px] overflow-hidden rounded-2xl'>
                    <Image
                        src={"https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                        fill
                        className='rounded-2xl -z-10 object-cover'
                        alt='GreatestOutdoors-Img'
                    />
                <div className='absolute inset-0 bg-black/40'></div>
                </div>
                <div className='absolute top-32 left-12 flex flex-col gap-3 items-start'>
                    <h3 className='text-4xl mb-3 w-64'>The Greatest Outdoors</h3>
                    <p>Wishlists curated by Airbnb</p>
                    <Link
                        href='/'
                        
                        className={`${buttonVariants({variant: "default"})} text-white`}
                    >
                        Get Inspired
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default GreatestOutdoors
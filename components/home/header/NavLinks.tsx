import { ModeToggle } from '@/components/ui/ModeToggle'
import { AlignJustify, Earth, User } from 'lucide-react'
import React from 'react'

const NavLinks = () => {
    return (
        <div className='flex items-center gap-2'>
            <ModeToggle />
            <div className='flex items-center gap-2 border-1 bg-secondary rounded-full border-primary px-1 md:px-4 py-[2px] md:p-2 hover:bg-primary/70 hover:border-primary/70 hover:text-white transition-all duration-300 cursor-pointer'>
                <AlignJustify />
                <User />
            </div>
        </div>
    )
}

export default NavLinks
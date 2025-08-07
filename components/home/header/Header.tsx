import Image from 'next/image'
import Link from 'next/link'
// components
import SearchBar from './SearchBar'
import NavLinks from './NavLinks'

const Header = () => {
    return (
        <header className='bg-foreground/80 dark:bg-foreground/90 sticky top-0 z-50'>
            <div className='container flex items-center justify-between gap-2'>
                <div className='flex items-center'>
                    <Link href={"/"} className='relative h-20 md:h-30 w-20 md:w-30 lg:w-40'>
                        <Image src="/logo.png" fill alt='logo-img' className='object-contain object-left' />
                    </Link>
                </div>
                <SearchBar />
                <NavLinks />
            </div>
        </header>
    )
}

export default Header
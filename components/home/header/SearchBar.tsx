import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className='relative'>
            <Input className='sm:!w-[400px] lg:w-[500px] md:!py-7 rounded-full !text-md md:!px-5 bg-secondary dark:bg-secondary' type='search' placeholder='Enter Your Search' />
            <Search className='hidden md:block sm:h-8 sm:w-8 absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-primary cursor-pointer' />
        </div>
    )
}

export default SearchBar
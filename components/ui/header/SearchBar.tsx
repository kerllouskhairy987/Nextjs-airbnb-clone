"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input'
import { Button, buttonVariants } from '../button';
import { Search } from 'lucide-react';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-date-range/dist/styles.css'; // main style file

const SearchBar = ({ placeholder }: { placeholder?: string }) => {
    const [input, setInput] = useState("");
    const [numOfGuests, setNumOfGuests] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSelect = (ranges: RangeKeyDict) => {
        console.log(ranges);
        setStartDate(ranges.selection.startDate as Date);
        setEndDate(ranges.selection.endDate as Date);
    }

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection',
    }

    return (
        <div className='relative'>
            <Input className='sm:!w-[400px] lg:w-[500px] md:!py-5 rounded-full !text-md md:!px-5 bg-secondary dark:bg-secondary' type='search' placeholder={placeholder || "Where are you going?"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Search className='hidden md:block sm:h-8 sm:w-8 absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-primary cursor-pointer' />

            {
                input && <div className='absolute right-1/2 top-[100%] translate-x-1/2 z-50 text-black bg-white pb-3'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        rangeColors={['#FD5B61']}
                        minDate={new Date()}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center justify-between px-2 gap-2'>
                        <h2 className='text-lg font-semibold'>Number of Guests</h2>
                        <Input
                            className='w-20'
                            type='number'
                            min={1}
                            value={numOfGuests}
                            onChange={(e) => setNumOfGuests(parseInt(e.target.value))}
                        />
                    </div>
                    <hr className='my-2 h-1 bg-primary' />
                    <div className='flex items-center justify-center space-x-3 '>
                        <Button type='button' variant={"secondary"} size={"lg"} onClick={() => setInput("")}>cancel</Button>
                        <Link
                            href={{
                                pathname: "/search",
                                search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
                            }}
                            className={`${buttonVariants({ size: "lg" })} text-white`}
                            onClick={() => setInput("")}
                        >
                            search
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchBar
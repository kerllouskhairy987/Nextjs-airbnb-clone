import SearchResultComponent from '@/components/search/SearchResultComponent';
import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header/Header'
import { format } from 'date-fns';

type TProps = {
    location: string;
    startDate: string;
    endDate: string;
    numOfGuests: string;
}
const SearchResult = ({ searchParams: { location, startDate, endDate, numOfGuests } }: { searchParams: TProps }) => {

    let formatStartDate;
    let formatEndDate;

    if (startDate && endDate) {
        formatStartDate = format(new Date(startDate), "dd MMMM yy");
        formatEndDate = format(new Date(endDate), "dd MMMM yy");
    }

    const range = `${formatStartDate} - ${formatEndDate}`

    const filters = [
        'Cancellation Flexibility',
        'Type of Place',
        'Price',
        'Rooms and Beds',
        'More filters',
    ];

    return (
        <>
            <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
            <section>
                <div className='container space-between-sections'>
                    <p className='text-sm'>300+ stays - {range} - for {numOfGuests} guests</p>
                    <h2 className='text-xl font-semibold capitalize mt-2'>stay in {location}</h2>

                    <div className='flex gap-2 flex-wrap items-center mt-4'>
                        {filters.map((filter: string, index: number) => (
                            <Button className='text-white' key={index}>{filter}</Button>
                        ))}
                    </div>

                    <SearchResultComponent />

                </div>
            </section>
        </>
    )
}

export default SearchResult
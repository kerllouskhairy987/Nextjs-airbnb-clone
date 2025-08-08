import Heading from '../ui/Heading'
import { getLive } from '@/utils/api'
import { TLiveData } from '@/types';
import LiveCard from './LiveCard';

const Live = async () => {
    const getLiveData: TLiveData[] = await getLive();
    return (
        <section>
            <div className='container space-between-sections'>
                <Heading title="Live Anywhere" />

                <div className='flex overflow-x-auto gap-3 cursor-grab hidden-scroll'>
                    {getLiveData.map((item: TLiveData, index: number) => (
                        <LiveCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Live
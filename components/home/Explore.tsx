import { getExplore } from "@/utils/api"
import Heading from "../ui/Heading"
import { TExploreData } from "@/types"
import ExploreCard from "./ExploreCard"

const Explore = async () => {

    const exploreData: TExploreData[] = await getExplore()

    return (
        <section>
            <div className="container space-between-sections">
                <Heading title="Explore Nearby" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                    {exploreData.map((item: TExploreData, index: number) => (
                        <ExploreCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Explore
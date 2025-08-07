import Banner from "@/components/home/Banner";
import Explore from "@/components/home/Explore";
import GreatestOutdoors from "@/components/home/GreatestOutdoors";
import Header from "@/components/ui/header/Header";
import Live from "@/components/home/Live";
import Circle from "@/components/ui/Circle";

export default function Home() {
  return (
    <main>
      <Header />
      <Circle />
      <Banner />
      <Explore />
      <Live />
      <GreatestOutdoors />
    </main>
  );
}

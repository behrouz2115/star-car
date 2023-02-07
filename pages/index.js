import AllButtom from "@/components/module/AllButtom";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/dataCar";

const Index = () => {
  const car = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories/>
      <AllButtom />
      <CarsPage data={car} />
    </div>
  );
};

export default Index;

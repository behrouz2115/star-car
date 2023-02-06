import carsData from "@/data/dataCar";
import CarsList from "@/components/templates/CarsList";
const Hatchback = () => {
  const hatchbackcars = carsData.filter((car) => car.category === "hatchback");
  console.log(hatchbackcars);
  return (
    <div>
      <CarsList data={hatchbackcars} />
    </div>
  );
};

export default Hatchback;

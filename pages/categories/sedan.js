import carsData from "@/data/dataCar";
import CarsList from "@/components/templates/CarsList";
const Sedan = () => {
  const sedancars = carsData.filter((car) => car.category === "sedan");
  console.log(sedancars);
  return (
    <div>
      <CarsList data={sedancars} />
    </div>
  );
};

export default Sedan;

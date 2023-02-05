import carsData from "../../data/dataCar";
import { useRouter } from "next/router";

const CarDetails = () => {
  const router = useRouter();
  const { carId } = router.query;
  const details = carsData[carId - 1];
  console.log(details.name);
  return <div>CarDetails</div>;
};

export default CarDetails;

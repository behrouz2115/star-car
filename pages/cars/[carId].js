import CarDetail from "@/components/templates/CarDetail";
import carsData from "../../data/dataCar";
import { useRouter } from "next/router";

const CarDetails = () => {
  const router = useRouter();
  const { carId } = router.query;
  const detail = carsData[carId - 1];
  return <CarDetail {...detail} />;
};

export default CarDetails;

import React from "react";
import { useRouter } from "next/router";
import carsData from "../../data/dataCar";
import CarsList from "@/components/templates/CarsList";

const Slug = () => {
  const router = useRouter();

  const [min, max] = router.query.slug || [];

  const filteres = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  if (!filteres.length) {
    return <h3>Not find</h3>;
  }
  return (
    <div>
      <CarsList data={filteres} />
    </div>
  );
};

export default Slug;

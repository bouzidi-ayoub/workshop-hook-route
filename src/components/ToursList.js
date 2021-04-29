import TourCard from "./Cardd";

const ToursList = ({ tours, deletePer, editTour }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {console.log(tours)}
      {tours.map((tour) => (
        <TourCard
          editTour={editTour}
          key={tour.id}
          tour={tour}
          deletePer={deletePer}
        />
      ))}
    </div>
  );
};
export default ToursList;

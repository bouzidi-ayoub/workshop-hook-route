import "./styles.css";
import tourss from "./Data";
import { useState } from "react";
import NavBar from "./components/NavBar";
import ToursList from "./components/ToursList";
import { Route } from "react-router-dom";
import AddTour from "./components/AddTour";
import PersoDetails from "./components/TourDetails";
export default function App() {
  const [tours, setTours] = useState(tourss);
  const [searchByName, setSearchByName] = useState("");
  const addPer = (newTour) => {
    setTours([...tours, newTour]);
  };
  const deletePer = (id) => {
    setTours(tours.filter((erson) => erson.id !== id));
  };
  const editTour = (id, editedTour) => {
    // {id:0,name:"pp",status:"jjj",image:"vf",description:"jfjjdf"}
    // editedtour=name:"pp",status:"jjj",image:"vf",description:"jfjjdf"
    setTours(
      tours.map((tour) =>
        tour.id === id ? { ...tour, ...editedTour } : tour
      )
    );
  };
  const filteredList = tours.filter((tour) =>
    tour.name.toUpperCase().includes(searchByName.toUpperCase())
  );
  return (
    <div className="App">
      <NavBar setSearchByName={setSearchByName} searchByName={searchByName} />
      <Route exact path="/" render={() => <p> this is home page </p>} />
      <Route
        path="/tours"
        render={() => 
            <ToursList
              editTour={editTour}
              tours={filteredList}
              deletePer={deletePer}
            />
        }
      />
      <Route path="/addTour" render={() => <AddTour addPer={addPer} />} />
      <Route
        path="/info/:idTour"
        render={(props) => <PersoDetails tours={tours} {...props} />}
      />
    </div>
  );
}

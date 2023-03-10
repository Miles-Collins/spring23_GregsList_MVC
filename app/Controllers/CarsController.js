import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { carsService } from "../Services/CarsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawCars() {
  let template = "";
  appState.cars.forEach((car) => (template += car.CardTemplate));
  setHTML("listings", template);
  setHTML("listing-form", Car.GetCarFormTemplate());
}

function _drawActiveCar() {
  if (appState.activeCar) {
    setHTML("details", appState.activeCar.ActiveCarTemplate);
  } else {
    Pop.error("No Active Car!");
  }
}

// FIXME Step 5: Create a controller with a console log in the contructor
export class CarsController {
  constructor() {
    // NOTE first step should always be get a console log
    // console.log('Hello Jeremy, your cars controller is working')
    // _drawCars()
    appState.on("cars", _drawCars);
    appState.on("activeCar", _drawActiveCar);
  }

  // NOTE only use async/await for Pop.confirm this week
  async removeCar(carId) {
    debugger;
    if (await Pop.confirm("Are you sure want to delete that car")) {
      carsService.removeCar(carId);
    }
  }

  createCar() {
    // NOTE don't refresh the page
    if (window.event) {
      window.event.preventDefault();
      let form = window.event.target;
      let formData = getFormData(form);
      console.log(formData);
      carsService.createCar(formData);
    } else {
      Pop.error("No Car Form.");
    }
  }

  setActiveCar(carId) {
    carsService.setActiveCar(carId);
  }

  showCars() {
    _drawCars();
  }
}

import { CarsController } from "./Controllers/CarsController.js";

class App {
  carsController = new CarsController();
}

window["app"] = new App();

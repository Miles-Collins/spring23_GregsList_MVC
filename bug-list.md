# Bug List

Index File
1. onclick="app.carController.showCars()" is missing a s it should be onclick="app.carsController.showCars()"
2. Changed id listings to id cars in the index page so emphasize the names have to match

App File
1. Erased cars carsController = new CarsController() so nothing is connected

Controller File
1. I took off the await in the pop confirm so it fires immediately
2. Removed .js from the Pop import

Car Model File
1. Removed name="make" and name="color" on the form inputs so that way the information you enter is never created on the new item
2. Removed the id in the removeCar button inside CardTemplate
3. Active Car Template I removed the ${this.color} and changed to hard coded red


Service File
1. In remove car I changed it from CarId to id in the filter to show the importance of naming convention and to show if it is grayed out it is not being used.
2. The import Car model was changed to Cars so it is imported incorrectly.
3. Changed the singleton statement in the service from export to let at the bottom of the file.

AppState File 
1. I changed cars from an array to an object and removed the loadState line that is up above. I also changed the intelisense up above from an array to a single object.
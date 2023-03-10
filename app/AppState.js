import { Car } from "./Models/Car.js";
import { Value } from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

// FIXME Step 2: set up a place to store our data

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", [Value]);

  /** @type {import('./Models/Car').Car[]} */
  cars = loadState("cars", [Car]);
  /** @type {import('./Models/Car').Car|null} */
  activeCar = null;
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});

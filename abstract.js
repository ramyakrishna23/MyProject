class CoffeeMachine {
  start() {
    console.log("Starting the machine...");
  }

  brucoffee() {
    console.log("Bru coffee is ready...");
  }

  makeCoffee() {
    this.start();
    this.brucoffee();
    console.log("Your coffee is ready!");
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee(); // hides internal methods

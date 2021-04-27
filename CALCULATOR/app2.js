class Calculator {
  constructor(currentOperand, previousOperand) {
    this.currentOperand = currentOperand;
    this.previousOperand = previousOperand;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = "";
    this.prevOperation = "";
    this.updateView();
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    this.updateView();
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    if (number === "." && this.currentOperand === "") {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") {
      return;
    }
    this.operation = operation.toString();
    if (this.previousOperand !== "") {
      this.operation = this.prevOperation;
      this.currentOperand = this.compute();
    }
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.prevOperation = operation;
    this.operation = operation;
    this.updateView();
  }

  compute() {
    if (
      this.currentOperand === "" ||
      this.previousOperand === "" ||
      this.prevOperation === ""
    ) {
      return;
    }
    switch (this.operation) {
      case "/":
        this.result =
          parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
        break;
      case "*":
        this.result =
          parseFloat(this.previousOperand) * parseFloat(this.currentOperand);
        break;
      case "+":
        this.result =
          parseFloat(this.previousOperand) + parseFloat(this.currentOperand);
        break;
      case "-":
        this.result =
          parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
        break;
    }
    this.previousOperand = this.currentOperand;
    this.currentOperand = this.result;
    this.prevOperation = "";
    this.updateView();
    return this.result;
  }

  updateView() {
    currOperandView.innerText = this.currentOperand;
    prevOperandView.innerText = `${this.previousOperand} ${this.operation}`;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const prevOperandView = document.querySelector("[data-previous]");
const currOperandView = document.querySelector("[data-current]");
const allClearBtn = document.querySelector("[data-all-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const equalsBtn = document.querySelector("[data-equals]");
const operationBtns = document.querySelectorAll("[data-operation]");

let calculator = new Calculator(currOperandView, prevOperandView);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateView();
  });
});

allClearBtn.addEventListener("click", () => {
  calculator.clear();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
});

operationBtns.forEach((operation) => {
  operation.addEventListener("click", () => {
    calculator.chooseOperation(operation.innerText);
  });
});

equalsBtn.addEventListener("click", () => {
  calculator.compute();
});

// TODO: fix bugs: when operation is press after =

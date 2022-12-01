import { Component, OnInit } from '@angular/core';
import { addition } from "../addition/addition"
import { division } from '../division/division';
import { exp } from '../exp/exp';
import { multiplication } from '../multiplication/multiplication';
import { sqr } from '../sqr/sqr';
import { sqrt } from '../sqrt/sqrt';
import { substraction } from '../substraction/substraction';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  result = 0;
  operator1 = 0;
  operator2 = 0;
  text = " ";

  ngOnInit() {
  }

  addition() {
    let myresult = 0;
    myresult = addition(this.operator1, this.operator2);
    this.result = myresult;
    this.text = "La suma es: " + this.result;
  }

  division() {
    let myresult = 1;
    myresult = division(this.operator1, this.operator2);
    this.result = myresult;
    this.text = "La división es: " + this.result;
  }

  exp() {
    let myresult = 1;
    myresult = exp(this.operator1, this.operator2);
    this.result = myresult;
    this.text = "El exponente es: " + this.result;
  }

  multiplication() {
    let myresult = 1;
    myresult = multiplication(this.operator1, this.operator2);
    this.result = myresult;
    this.text = "La multiplicación es: " + this.result;
  }

  sqr() {
    let myresult = 1;
    myresult = sqr(this.operator1);
    this.result = myresult;
    this.text = "El cuadrado es: " + this.result;
  }
  sqrt() {
    let myresult = 1;
    myresult = sqrt(this.operator1);
    this.result = myresult;
    this.text = "La Raíz es: " + this.result;
  }

  substraction() {
    let myresult = 0;
    myresult = substraction(this.operator1, this.operator2);
    this.result = myresult;
    this.text = "La resta es: " + this.result;
  }
}

import { Component, OnInit } from '@angular/core';
import { addition } from "../addition/addition"
import { division } from '../division/division';

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
}

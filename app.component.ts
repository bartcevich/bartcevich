import {Component} from '@angular/core';
import {ControlContainer, FormBuilder, Validators} from "@angular/forms";
import { subscribeOn } from 'rxjs';
import { AppService } from './app.service';
//import any = jasmine.any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priceForm = this.fb.group(  {
    names: ['',Validators.required],
    phone: ['',Validators.required],
    car: ['',Validators.required],

  })
  //priceForm = this.fb.group( controlsConfig:{
  //names: ['',Validators.required],
  //phone: ['',Validators.required],
  //car: ['',Validators.required],
  //})
  carsData = [
  {
    image: "1.png",
    name: "Lamborghini Huracan Spyder",
    transmission: "автомат",
    engin: 5.2,
    year: 2019
  },
  {
    image: "2.png",
    name: "Chevrolet Corvette",
    transmission: "автомат",
    engin: 6.2,
    year: 2017
  },
  {
    image: "3.png",
    name: "Ferrari California",
    transmission: "автомат",
    engin: 3.9,
    year: 2010
  },
  {
    image: "4.png",
    name: "Lamborghini Urus",
    transmission: "автомат",
    engin: 4.0,
    year: 2019
  },
  {
    image: "5.png",
    name: "Audi R8",
    transmission: "автомат",
    engin: 5.2,
    year: 2018
  },
  {
    image: "6.png",
    name: "Аренда Chevrolet Camaro",
    transmission: "автомат",
    engin: 2.0,
    year: 2019
  },
  {
    image: "7.png",
    name: "Maserati Quattroporte",
    transmission: "автомат",
    engin: 3.0,
    year: 2018
  },
  {
    image: "8.png",
    name: "Dodge Challenger",
    transmission: "автомат",
    engin: 6.4,
    year: 2019
  },
  {
    image: "9.png",
    name: "Nissan GT-R",
    transmission: "автомат",
    engin: 3.8,
    year: 2019
  },
  ]

  constructor(private fb: FormBuilder, private appService: AppService ) {
  }
  onSubmit() {
    if (this.priceForm.valid) {
      this.appService.sendQuery(this.priceForm.value)
        .subscribe(
          {
            next: (response: any) => {
              alert(response.message);
              this.priceForm.reset();
            },
            error: (response) => {
              alert(response.error.message)
            }
          }
        );

      //alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время.");
      this.priceForm.reset();
    }
  }
  goScroll(target: HTMLElement) {
    target.scrollIntoView({behavior: "smooth"});
  }

};

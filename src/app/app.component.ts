import { Component } from '@angular/core';
import { Car, City, Company } from './models/tables.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  car: Car;
  cars: Car[] = [];

  city: City;
  cities: City[] = [];

  company: Company;
  companies: Company[] = [];

  constructor() {
    this.createCarTable("BMW", "Red");
    this.createCarTable("Benz", "White");
    this.createCarTable("Tesla", "Black");

    this.createCityTable("Tehran", "Iran", 12);
    this.createCityTable("Amsterdam", "The Netherlands", 1);

    this.createCompanyTable("Omnia", "Mr.Sander", 25);
    this.createCompanyTable("Unilever", "Mr. Martin", 350);
  }
  createCarTable(brand: string, color: string) {
    this.car = new Car();
    this.car.brand = brand;
    this.car.color = color;
    this.car.creatCarDescription();
    this.cars.push(this.car);
    debugger
  }
  createCityTable(name: string, country: string, population: number) {
    this.city = new City();
    this.city.name = name;
    this.city.country = country;
    this.city.population = population;
    this.city.creatCityDescription();
    this.cities.push(this.city);
  }
  createCompanyTable(name: string, owner: string, employees: number) {
    this.company = new Company();
    this.company.name = name;
    this.company.owner = owner;
    this.company.employees = employees;
    this.company.creatCompanyDescription();
    this.companies.push(this.company);
  }

}

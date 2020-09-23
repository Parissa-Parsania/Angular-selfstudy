export class Car {
    brand: string;
    color: string;
    description:string;

    creatCarDescription(){
        this.description=this.brand+" is "+this.color;
    }
}


export class City {
    name: string;
    country: string;
    population: number;
    description:string;

    creatCityDescription(){
        this.description=this.name+" is in "+this.country;
    }
}
export class Company {
    name: string;
    owner: string;
    employees: number;
    description:string;

    creatCompanyDescription(){
        this.description=this.owner+" is the owner of "+this.name;
    }
}
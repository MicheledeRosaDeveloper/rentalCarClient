export class Vehicle {
    constructor(
      public id: number,
      public plate: string,
      public brand: string,
      public model: string,
      public year: number,
      public category: string,
      public rental: Rental | null
    ) {}
  }

  export class Rental {
    constructor(
      public rentalId: number,
      public bookingDate: string,
      public expireDate: string,
      public customer: User | null,
      public rentedVehicle: Vehicle | null
  
    ) {}
  }

  export class User {
    constructor(
      public userId: number,
      public name: string,
      public surname: string,
      public dateOfBirth: string,
      public role: string,
      // public enabled: boolean,
      public rentalMade: Rental | null | undefined
    ) {}
  }

  export interface RentalInfo {
    rentalId: number,
    bookingDate: string,
    expireDate: string,
    vehicleModel: string,
    vehiclePlate: string
  }
  
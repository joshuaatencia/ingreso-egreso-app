export class User {

    public nombre: string;
    public email: string;
    public uid: string;

    constructor(nombre: string, email: string, uid: string) {
        this.nombre = nombre;
        this.uid = uid;
        this.email = email;
    }

}


// class Car {
//     constructor(
//        public readonly wheels: number,
//        public readonly topSpeed: number,
//        public readonly name: string,
//        public readonly isComfortable: boolean) {
//     }
//     public copyWith(modifyObject: { [P in keyof Car]?: Car[P] }): Car {
//        return Object.assign(Object.create(Car.prototype), { ...this, ...modifyObject });
//     }
//  }
//  const myCar = new Car(4, 200, 'supercar', true);
//  const modifiedCar = myCar.copyWith({wheels: 3, topSpeed: 3});
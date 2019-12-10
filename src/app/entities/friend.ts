export class Friend {
  id: number;
  name: string;
  age: number;
  gender: Gender;
  isAlive: boolean;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.gender = new Gender(true, false);
    this.age = age;
    this.name = name;
  }
}

export class Gender {
  isMale: boolean;
  isFemale: boolean;

  constructor(isMale, isFemale) {
    this.isMale = isMale;
    this.isFemale = isFemale;
  }
}

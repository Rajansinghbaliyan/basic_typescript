import * as faker from "faker";

export class Company {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  catchPhrase: string;

  constructor() {
    this.name = faker.name.firstName();
    this.catchPhrase = faker.company.catchPhraseNoun();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

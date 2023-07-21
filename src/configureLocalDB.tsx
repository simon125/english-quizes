import Dexie from "dexie";

class MyDatabase extends Dexie {
  contacts!: Dexie.Table<IContact, number>; // Object store for contacts

  constructor() {
    super("myDatabase");

    this.version(1).stores({
      contacts: "++id,name,email",
    });

    this.contacts = this.table("contacts");
  }
}

interface IContact {
  id?: number;
  name: string;
  email: string;
}

export const db = new MyDatabase();

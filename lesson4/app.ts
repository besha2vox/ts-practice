abstract class House {
    protected door = false;
    private tenants: Person[] = [];

    constructor(public key: Key) {}

    public comeIn(person: Person): void {
        if (!this.door) {
            console.log('Door is close');
            return;
        }

        this.tenants.push(person);
        console.log('Person inside');
    }

    abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    public openDoor(key: Key): boolean {
        if (key.getSignature() !== this.key.getSignature()) {
            console.log('Key to another door');
            return (this.door = false);
        }

        console.log('Door is open');
        return (this.door = true);
    }
}

class Key {
    private signature: number;

    constructor() {
        this.signature = Math.round(Math.random() * Math.pow(10, 10));
    }

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(public key: Key) {}

    public getKey(): Key {
        return this.key;
    }
}

const key = new Key();
const person = new Person(key);
const myHouse = new MyHouse(key);

myHouse.openDoor(person.getKey());
myHouse.comeIn(person);

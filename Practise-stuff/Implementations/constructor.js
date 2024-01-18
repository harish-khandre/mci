class Khandre {
  constructor(name, type) {
    console.log("khandre constructor:", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Job extends Khandre {
  constructor(name, type) {
    super(name, type);
    console.log("job constructor:", this);
  }
  play() {
    console.log(`yeah I'm a ${this.type}`);
  }
}

const member1 = new Job("harish", "developer");

// now if i type member1.play or member.introduce it will run the function

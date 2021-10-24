class Person {
  constructor() {
    this.age = 21
    this.name = 'valentyn'
    Object.freeze(this)
  }

  fullName() {
    return this.age >= 18 ? `Сэр ${this.name}` : `Мистер ${this.name}`
  }

  birthDay() {
    return this.age++
  }
}

const person = new Person(21000)

console.log(person.birthDay())

function Student(name, surname, birthDate, assessments = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.assessments = assessments;

    this.visiting = Array(25).fill(null);
}

Student.prototype.getAge = function () {
    let totalYear = new Date().getFullYear();
    return totalYear - this.birthDate;
}

Student.prototype.getAverage = function () {
    let result = 0;
    this.assessments.forEach(element => {
        result += element;
    });
    return result / this.assessments.length;

}

Student.prototype.present = function () {
    for (let i = 0; i < this.visiting.length; i++) {
        if (this.visiting[i] === null) {
            this.visiting[i] = true;
            return this;
        }
    }
}

Student.prototype.absent = function () {
    for (let i = 0; i < this.visiting.length; i++) {
        if (this.visiting[i] === null) {
            this.visiting[i] = false;
            return this;
        }
    }
}

Student.prototype.summary = function () {
    let result = 0;

    this.visiting.forEach(el => {
        if (el === true || el === false) result += el;
    });
    const value = this.visiting.filter((el) => el === false || el === true);
    result = result / value.length;
    

    if (result >= 0.9 && this.getAverage() >= 90) {
        console.log('Молодець!');
    } else if (result >= 0.9 || this.getAverage() >= 90) {
        console.log('Добре, але можна краще.');
    } else {
        console.log('Редиска.');
    }    
}

const student1 = new Student('Nikita', 'Shevtsov', 1999, [100, 99, 80, 100]);
const student2 = new Student('Serhii', 'Savchuk', 1998, [100, 100, 100, 100, 100, 100]);
const student3 = new Student('brad', 'pitt', 1998, [50, 55, 90, 95, 20, 80]);


student1.present().absent().present().absent().present();
console.log(`${student1.name} ${student1.surname} - Вік: ${student1.getAge()}, Середній бал: ${student1.getAverage()}`);
student1.summary();

student2.present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present();
console.log(`${student2.name} ${student2.surname} - Вік: ${student2.getAge()}, Середній бал: ${student2.getAverage()}`);
student2.summary();

student3.present().present().absent().present().present().absent().absent();
console.log(`${student3.name} ${student3.surname} - Вік: ${student3.getAge()}, Середній бал: ${student3.getAverage()}`);
student3.summary();
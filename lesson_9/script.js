// Сумма зарплат
// Дізнатись суму всіх зарплат користувачів:

const conmpany = {
    sales: [
        { name: 'Jhon', salary: 1000 }, 
        { name: 'Alice', salary: 600 },
        { name: 'Bob', salary: 1200 },
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [ 
            { name: 'Jack', salary: 1300 },
        ]
    }
}

function totalSales(company) {
    if (company === null || typeof company !== 'object') return company;

    let total = 0;
    
    if (Array.isArray(company)) {
        for (let i = 0; i < company.length; i++) {
            total += company[i].salary;
        };
    } else {
        for (let key in company) {
            total += totalSales(company[key]);
        };
    };

    return total; 
}

const total = totalSales(conmpany);
console.log(total);
// Об'єкт може містити невідому кількість департаментів та співробітників
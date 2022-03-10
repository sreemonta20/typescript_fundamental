export {};

interface Person{
    firstName: string;
    lastName: string;
}

function getName(person: Person): string{
    console.log(`Hey ${person.firstName} ${person.lastName}`);
return `Hey ${person.firstName} ${person.lastName}`;
}

const person = {firstName: "James", lastName: "cook"};

getName(person);


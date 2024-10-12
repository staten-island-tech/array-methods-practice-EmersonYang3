// Assignment #1
const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
  ];

// Assignment #1 Part 3A
const topStudents = students.filter(student => student.grade > 80);

topStudents.forEach(student => {
  console.log(student.name);
});

// Assignment #1 Part 3B
const youngStudents = students.filter(student => student.age <= 21);
console.log(youngStudents);





// Assignment #2
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
    { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
    { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
    { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
    { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
    { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
    { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
];

// Assignment #2 Part 1A
products.forEach(product => {
    console.log(`Name: ${product.name}, Price: $${product.price}`);
});

// Assignment #2 Part 1B
products.forEach(product => {
    product.price *= 1.10; // Increase price by 10%
});
console.log(products)

// Assignment #2 Part 2C
const highlyRatedProducts = products.filter(product => product.rating >= 4.5);
console.log('Highly Rated Products:', highlyRatedProducts);

// Assignment #2 Part 3A
products.filter(product => product.rating >= 4.5).forEach(product => {
    console.log(product.name);
});  

// Assignment #2 Part 3B
products.filter(product => product.category === 'Electronics' && product.price < 1000).forEach(product => {
  console.log(`Name: ${product.name}, Price: $${product.price}`);
});

const authors = [
  {
    name: 'J.K. Rowling',
    email: 'abc@gmail.com',
  },
  {
    name: 'Michael Crichton',
    email: 'abc@gmail.com'
  },
];

export default {
  Query: {
    authors: () => authors,
  },
};
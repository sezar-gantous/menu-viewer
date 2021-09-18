import faker from "faker";

export const generateProduct = () => ({
  name: faker.random.word(),
  description: faker.lorem.sentence(),
  price: faker.datatype.number({ min: 2, max: 35 }) * 100,
});

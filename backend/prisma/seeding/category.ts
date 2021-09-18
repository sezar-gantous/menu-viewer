import faker from "faker";
import { generateProduct } from "./product";
import { generateItems } from "./util/generateItems";

export const generateCategory = () => ({
  name: faker.random.words(2),
  description: faker.lorem.sentence(),
  products: {
    create: generateItems(
      faker.datatype.number({ min: 2, max: 10 }),
      generateProduct
    ),
  },
});

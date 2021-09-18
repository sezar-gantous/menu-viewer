import faker from "faker";
import { generateCategory } from "./category";
import { generateItems } from "./util/generateItems";

export const generateMenu = () => ({
  name: faker.random.words(3),
  description: faker.lorem.sentences(2),
  categories: {
    create: generateItems(
      faker.datatype.number({ min: 3, max: 7 }),
      generateCategory
    ),
  },
});

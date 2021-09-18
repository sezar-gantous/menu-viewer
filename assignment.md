# Assignment

## Task

For this assignment, you will be building a simple menu viewer. You have complete creative freedom over how it should be structured. A few examples can be found on your typical delivery platforms: [Uber Eats](https://ubereats.com), [Deliveroo](https://deliveroo.co.uk/), [Takeaway.com](https://www.takeaway.com/), [DoorDash](https://www.doordash.com/),...

We have a backend already built for you located in the `backend` folder. To run it, follow the instructions in the [README](README.md#setup-instructions). For the frontend, we just have a `frontend` folder where we expect you to write your code.

### Part 1 - Menu viewer

The menu viewer should at least contain:

- The menu name and description
- For each category: name and description
- For each product: name and description

> Note that we do not expect your menu viewer to be extremely fancy or polished. We want a basic proof of concept with a bit of necessary styling and structure that ideally could be done in **2 - 3 hours**. Do not spend too much time on things like styling or animations. The functionality is more important to us. We want to get some insights into how you code and how you structure your code.

### Part 2 - Ordering items

The menu viewer should be interactive. We should be able to order items from the menu. An order contains a number of products of the same menu and for each product, we have a quantity. More information can be found in the [Orders](#orders) documentation below.

We do not want you to build an order viewer as well. While we provide endpoints to get the orders, they are mostly meant for your convenience to check if your order contains the desired data.

### Part 3 - Finishing the assignment

When you are finished with the assignment, please make sure we know how to run your code. You can include a `README.md` file in the `frontend` folder with instructions on how to run your code.

> :warning: This project is quite new so please do provide some feedback on how long you spent on this assignment.
> Is it feasible enough to do this in the allotted time?
> Is the assignment clear? Something not working as expected? All feedback is welcome!
> You can write this in the `README.md` file as well.

## Technology

We left the `frontend` folder empty on purpose because we want to give you complete freedom in your choices of technology. At Deliverect, we use React JS with Typescript, but if you want to use another framework, or even no framework at all, that is completely fine.

## About the API

The `backend` API is a simple API with a limited number of endpoints. All of them are documented here:

### Menus

A menu contains everything that you need to display a menu, its categories and its products.
We expose 2 endpoints for it:

> ```
> GET /menus
> ```
>
> Gets all the menus

> ```
> GET /menus/:menuId
> ```
>
> Gets one specific menu by its ID

A menu is structured like this.

<details><summary>Menu schema</summary>

```json
{
  "id": 1,
  "name": "My menu",
  "description": "My menu's description",
  "categories": [
    {
      "id": 1,
      "name": "Starters",
      "description": "Starters for your menu",
      "menuId": 1,
      "products": [
        {
          "id": 1,
          "name": "Salad",
          "description": "A healthy starter salad",
          "categoryId": 1,
          "price": 800
        },
        {
          "id": 2,
          "name": "Tomate crevette",
          "description": "A tomato filled with shrimp",
          "categoryId": 1,
          "price": 750
        }
      ]
    },
    {
      "id": 2,
      "name": "Mains",
      "description": "Main courses for your menu",
      "menuId": 1,
      "products": [
        {
          "id": 3,
          "name": "Hamburger",
          "description": "A nice piece of meat between 2 buns with some salad.",
          "categoryId": 2,
          "price": 1300
        },
        {
          "id": 4,
          "name": "Cheese burger",
          "description": "A hamburger, only there is now also cheese between the buns",
          "categoryId": 2,
          "price": 1500
        }
      ]
    }
  ]
}
```

</details>

### Orders

An order occurs when someone wants to order items from a menu.
We expose endpoints to get the orders, and an endpoint to create a new order.

> ```
> GET /orders
> ```
>
> Gets all the orders

> ```
> GET /orders/:orderId
> ```
>
> Gets one specific order by its ID

> ```
> POST /orders
> ```
>
> Creates an order. The body should contain something like this
>
> ```js
> {
>   "tax": 600,
>   "notes": "This is an optional note",
>   "products": [
>     { "productId": 1, "quantity": 2 },
>     { "productId": 2 } // Assumes quantity 1
>   ]
> }
> ```

An order looks like this:

<details> <summary>Order schema</summary>

```json
{
  "id": 1,
  "tax": 600,
  "notes": "This is an optional note",
  "products": [
    {
      "product": {
        "id": 1,
        "name": "Salad",
        "description": "A healthy starter salad",
        "categoryId": 1,
        "price": 800
      },
      "quantity": 2
    },
    {
      "product": {
        "id": 3,
        "name": "Hamburger",
        "description": "A nice piece of meat between 2 buns with some salad.",
        "categoryId": 2,
        "price": 1300
      },
      "quantity": 1
    }
  ]
}
```

</details>

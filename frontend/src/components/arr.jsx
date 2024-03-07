let arr = [
    { "_id": "60c67bdff5ee510015f3dda8", "name": "Havana special", "price": 599, "size": "Small", "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798224663-303286145.png?raw=true", "createdAt": "2021-06-13T21:42:55.573Z" },
    { "_id": "60c67bc0f5ee510015f3dda7", "name": "Chicken premier", "price": 899, "size": "Medium", "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798368145-612682611.png?raw=true", "createdAt": "2021-06-13T21:42:24.070Z" },
    { "_id": "60c67ba9f5ee510015f3dda6", "name": "Double peperoni", "price": 1399, "size": "Small", "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798224663-303286145.png?raw=true", "createdAt": "2021-06-13T21:42:01.515Z" },
    { "_id": "60c67b95f5ee510015f3dda5", "name": "Mushroom", "price": 499, "size": "Small", "image": "https://github.com/codersgyan/pizza-images/blob/main/1623615210523-833930790.png?raw=true", "createdAt": "2021-06-13T21:41:41.640Z" },
    { "_id": "60c67b7ef5ee510015f3dda4", "name": "Mix BBQ", "price": 1299, "size": "Large", "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798169571-671551234.png?raw=true", "createdAt": "2021-06-13T21:41:18.956Z" },
    { "_id": "60c67b6af5ee510015f3dda3", "name": "Carbonara", "price": 999, "size": "Large", "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798169571-671551234.png?raw=true", "createdAt": "2021-06-13T21:40:58.192Z" },
    { "_id": "60c67b5af5ee510015f3dda2", "name": "Margarita", "price": 599, "size": "Large", "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798003389-788648576.png?raw=true", "createdAt": "2021-06-13T21:40:42.881Z" },
    { "_id": "60c67b47f5ee510015f3dda1", "name": "Chicken mushroom", "price": 799, "size": "Small", "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798003389-788648576.png?raw=true", "createdAt": "2021-06-13T21:40:23.941Z" },
    { "_id": "60c67b32f5ee510015f3dda0", "name": "Four cheese", "price": 1200, "size": "Medium", "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798169571-671551234.png?raw=true", "createdAt": "2021-06-13T21:40:02.211Z" },
    { "_id": "60c67acaf5ee510015f3dd9f", "name": "Caramel pineapple", "price": 790, "size": "Medium", "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798003389-788648576.png?raw=true", "createdAt": "2021-06-13T21:38:18.489Z" }
];

arr.forEach(pizza => {
    switch (pizza.name) {
        case "Havana special":
            pizza.description = "Experience a taste of Havana with our special pizza featuring a unique blend of flavors and ingredients. Perfect for those seeking a culinary adventure.";
            break;
        case "Chicken premier":
            pizza.description = "Indulge in luxury with our Chicken Premier pizza, where succulent chicken toppings meet premium quality. A gourmet delight for the discerning pizza lover.";
            break;
        case "Double peperoni":
            pizza.description = "Double the delight with our Double Pepperoni pizza. Packed with double layers of spicy and savory pepperoni, it's a feast for pepperoni enthusiasts.";
            break;
        case "Mushroom":
            pizza.description = "Savor the earthy goodness of mushrooms with our Mushroom pizza. Fresh mushrooms atop a crispy crust create a delightful harmony of flavors.";
            break;
        case "Mix BBQ":
            pizza.description = "Get ready for a barbecue extravaganza with our Mix BBQ pizza. A perfect blend of smoky barbecue flavors, assorted meats, and a generous serving of joy.";
            break;
        case "Carbonara":
            pizza.description = "Transport yourself to the streets of Italy with our Carbonara pizza. Creamy Alfredo sauce, crispy bacon, and Parmesan cheese come together for an authentic taste.";
            break;
        case "Margarita":
            pizza.description = "Experience the classic simplicity of our Margarita pizza. Fresh tomatoes, mozzarella, and basil on a thin crust – a timeless favorite that never disappoints.";
            break;
        case "Chicken mushroom":
            pizza.description = "Indulge in the rich and savory combination of chicken and mushrooms with our Chicken Mushroom pizza. A delightful choice for those seeking a hearty flavor.";
            break;
        case "Four cheese":
            pizza.description = "Cheese lovers, rejoice! Our Four Cheese pizza brings together a heavenly quartet of cheeses, creating a gooey, melty masterpiece on every slice.";
            break;
        case "Caramel pineapple":
            pizza.description = "Satisfy your sweet and savory cravings with our Caramel Pineapple pizza. A unique blend of caramelized pineapple and savory toppings for a delightful twist.";
            break;
        default:
            pizza.description = "Description not available.";
    }
});

export default arr;

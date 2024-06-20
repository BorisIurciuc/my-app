const dishData = [
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
        image: "https://shop.eismann.de/upload/product-detail-theme/de/3181-pizza-margherita-F-20240105.jpg",
        
            ingredients: [
                { id: 1, name: "Mozzarella", quantity: "200g" },
                { id: 2, name: "Tomatoes", quantity: "150g" },
                { id: 3, name: "Basil", quantity: "5g" },
                { id: 4, name: "Pizza Dough", quantity: "1 piece" },
                { id: 5, name: "Olive Oil", quantity: "10ml" },
                { id: 6, name: "Salt", quantity: "2g" }
            ]
        
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        image: "https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg",
        ingredients: [
                { id: 1, name: "Romaine Lettuce", quantity: "100g" },
                { id: 2, name: "Caesar Dressing", quantity: "50ml" },
                { id: 3, name: "Croutons", quantity: "50g" },
                { id: 4, name: "Parmesan Cheese", quantity: "30g" },
                { id: 5, name: "Lemon Juice", quantity: "10ml" },
                { id: 6, name: "Garlic", quantity: "1 clove" }
            ]
    },
    {
        id: 3,
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
        image: "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet-500x500.jpg",
        ingredients: [
                { id: 1, name: "Spaghetti", quantity: "200g" },
                { id: 2, name: "Eggs", quantity: "2" },
                { id: 3, name: "Pancetta", quantity: "100g" },
                { id: 4, name: "Parmesan Cheese", quantity: "50g" },
                { id: 5, name: "Black Pepper", quantity: "2g" },
                { id: 6, name: "Salt", quantity: "2g" }
            ]
    },
    {
        id: 4,
        name: "Grilled Chicken Sandwich",
        description: "Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun.",
        image: "https://www.seriouseats.com/thmb/VL0ghw8gfbLCvhRvAWE22SNcMeo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-best-grilled-chicken-sandwich-ever-hero-04-6a1d2e743a87423bac1f4ff53bd2926b.jpg",
        ingredients: [
                { id: 1, name: "Chicken Breast", quantity: "150g" },
                { id: 2, name: "Lettuce", quantity: "20g" },
                { id: 3, name: "Tomato", quantity: "30g" },
                { id: 4, name: "Mayonnaise", quantity: "20ml" },
                { id: 5, name: "Toasted Bun", quantity: "1 piece" },
                { id: 6, name: "Salt", quantity: "2g" },
                { id: 7, name: "Pepper", quantity: "1g" }
            ]
        },
        {
        id: 5,
        name: "Cheeseburger",
        description: "Juicy beef patty with melted cheese, lettuce, tomato, and pickles.",
        image: "https://www.swrfernsehen.de/landesschau-bw/rezepte/1653499450592%2Cimage-swr-19858~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg",
        ingredients: [
                { id: 1, name: "Beef Patty", quantity: "200g" },
                { id: 2, name: "Cheddar Cheese", quantity: "50g" },
                { id: 3, name: "Lettuce", quantity: "20g" },
                { id: 4, name: "Tomato", quantity: "30g" },
                { id: 5, name: "Pickles", quantity: "20g" },
                { id: 6, name: "Burger Bun", quantity: "1 piece" },
                { id: 7, name: "Ketchup", quantity: "10ml" },
                { id: 8, name: "Mustard", quantity: "10ml" }
            ]
        }
];
export default dishData;

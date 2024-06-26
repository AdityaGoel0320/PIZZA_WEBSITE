let dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

let express = require("express");
let app = express();
let PORT = process.env.PORT || 5000;
let cors = require("cors")
const { frontendUrl } = require("./assets/BackendUtils");
const stripe = require('stripe')("sk_test_51PAB7OSHK6BpruzqSLSxnWwaUBjJPmT02Qp9RWAKf0U0tp9p8qQ5DfkaDpgsjBbbbWVpsRwufsffKqEtnrCOmQ4200DuXg2j2E");


const corsOptions = {
    origin: `${frontendUrl}`, // or an array of allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

let authRoute = require("./router/auth-router");
let contactRoute = require("./router/contact-router");
let serviceRoute = require("./router/service-router");
let adminRoute = require("./router/admin-router");
let stripeRoute = require("./router/Stripe-router");
const errorMiddleWare = require("./middleware/error-middleware");
// const errorMiddleWare = require("./middleware/error-middleware");

// Log checkpoint to ensure this code block is reached
console.log("Checkpoint 1");



app.use(express.json());

// Log checkpoint to ensure this code block is reached
console.log("Checkpoint 2");

app.use("/api/form", contactRoute);

app.use("/api/auth", authRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

// Log checkpoint to ensure this code block is reached
console.log("Checkpoint 3");

require("./db/conn");

// Log checkpoint to ensure this code block is reached
console.log("Checkpoint 4");



app.post("/api/create-checkout-session", async (req, res) => {

    try {
        const { products } = req.body;



        // Check if products is an array
        if (!Array.isArray(products)) {
            throw new Error("Products should be an array.");
        }

        console.log("making listitemaa array ")
        // Create an array of line items for the Stripe Checkout session
        const line_items = products.map((product) => {
            return {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: product.name,
                        images: [product.image],
                    },
                    unit_amount: product.price, // Stripe requires price in cents
                },
                quantity: product.quantity,
            };
        });


        console.log("line_items printing")
        console.log(line_items)
        console.log("line items done")

        console.log("making session items work ")


        // Create a Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            success_url: 'http://localhost:5173/success', // Redirect URL after successful payment
            cancel_url: 'http://localhost:5173/cancel', // Redirect URL if payment is cancelled
        });


        // Return the session ID to the client
        res.json({ id: session.id });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error processing payment.");
    }

}

);



app.use(errorMiddleWare);

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});

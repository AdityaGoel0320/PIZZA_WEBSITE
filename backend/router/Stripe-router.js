let dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

let express = require("express");
let router = express.Router();
const stripe = require('stripe')("sk_test_51PAB7OSHK6BpruzqSLSxnWwaUBjJPmT02Qp9RWAKf0U0tp9p8qQ5DfkaDpgsjBbbbWVpsRwufsffKqEtnrCOmQ4200DuXg2j2E");

router.post("/create-checkout-session", async (req, res) => {
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
                    unit_amount: 1, // Stripe requires price in cents
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
});

module.exports = router;

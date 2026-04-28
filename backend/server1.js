import express from 'express'
import axios from 'axios'


const app = express()
app.use(express.json())
const db = []
app.get(`/create-order`, async function (req, res) {
    const arr = ["created", "processing", "failed"];

    const randomItem = arr[Math.floor(Math.random() * arr.length)];
    const order = {
        id: "123",
        amount: 500,
        status: randomItem
    };
    try {
        if (order.status === "created") {
            db.push(order)
            return res.json({
                message: "Order created successfully",
                order
            })
        }
        if (order.status === "processing") {
            db.push(order)
            return res.json({
                message: "Order created successfully",
                order
            })
        }
        if (order.status === "failed") {
            throw new Error("Order processing failed")
        }

    } catch (error) {
        console.error('Error creating order:', error);
        await axios.post('http://localhost:4000/webhook', order)
        return res.json({
            message: "Order processing failed, retrying..."
        })

    }

})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})


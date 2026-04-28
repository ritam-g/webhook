import express from 'express'
import axios from 'axios'


const app = express()
app.use(express.json())

app.get(`/create-order`, async function (req, res) {
    const order = {
        id: "123",
        amount: 500,
        status: "created"
    };
    console.log(`order created sucesssfully`, order);
    try {
        await axios.post('http://localhost:4000/webhook', order)
        res.status(200).send('Webhook received and processed')

    } catch (error) {
        console.error('Error sending webhook:', error);
        res.status(500).send('Error processing webhook')
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})


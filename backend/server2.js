import express from 'express'

const app = express()
app.use(express.json())
app.post(`/webhook`, function (req, res) {
   const { id, amount, status } = req.body;

   if(status === 'created') {
    console.log(`Order created successfully with ID: ${id} and Amount: ${amount}`);
    res.status(200).send('Webhook received and processed');
   } else {
    console.log(`Received webhook with status: ${status} for Order ID: ${id}`);
    res.status(200).send('Webhook received but not processed');
   }
})


app.listen(4000, () => {
    console.log('Server is running on port 4000')
})
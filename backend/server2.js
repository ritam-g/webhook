import express from 'express'

const app = express()
app.use(express.json())
app.post(`/webhook`, function (req, res) {
    const order = req.body
    if(order.status === "failed"){
        console.log(`Order processing failed, retrying...`, order);
        return res.json({
            message: "Order processing failed, retrying..."
        })
    }
})


app.listen(4000, () => {
    console.log('Server is running on port 4000')
})
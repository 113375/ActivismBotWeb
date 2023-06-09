const server = require('express')
const app = server()
const port = 3000


app.get('/', (req, res) => {
    // res.render("./src/index.js")


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

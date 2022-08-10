const { application } = require('express')
const express = require('express')
const { allowedNodeEnvironmentFlags } = require('process')
const bodyParser = require('body-parser')
const app = express()

app.use('/css',express.static(__dirname+'/public/css'))
app.use('/',(req,res,next)=>{
    console.log('someone made a request for:'+req.url)
    res.cookie('cookieName','cookieValue')
    next()
})

app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head>
                <link type="text/css" rel="stylesheet" href="/css/styles.css">
            </head>
            <body>
                <h1>Hello !!</h1>
            </body>
        </html>
    `)
})

app.get('/api/user/:id',(req,res)=>{
    // res.send({
    //     name:"Francis",
    //     lastName:"Jones"
    // }) 
    let id = req.params.id
    res.send(`
    <html>
        <body>
            <h1>The user id is ${id}</h1>
        </body>
    </html>
`)
})

// hhh.com/car?brand=ford&year=2022
app.get('/api/car',(req,res)=>{
    let brand = req.query.brand
    let year = req.query.year

    res.send({
        brand,
        year
    })

})



const PORT = process.env.PORT || 3000
app.listen(PORT)

const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const cardRoutes = require('./routes/card')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
var bodyParser = require('body-parser')

const app = express()

const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/card', cardRoutes)


const PORT = process.env.PORT || 3000

async function start() {
	try {
		const password = 'qJXrWbXP9MFTGpYr'
		const url = `mongodb+srv://ales:${password}@cluster0.klt7q.mongodb.net/shop`
		await mongoose.connect(url, {
			useUnifiedTopology: true, 
			useNewUrlParser: true
		})
		app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}...`)
	})
	} catch(e) {
		console.log(e)
	}
	
}

start()




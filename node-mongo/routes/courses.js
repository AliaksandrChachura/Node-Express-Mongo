const {Router} = require('express')
const Course = require('../models/course')
const router = Router()



router.get('/', async (req, res) => {
	const courses = await Course.find().lean()
	// console.log(courses)
	res.render('courses', {
		title: 'courses',
		isCourses: true,
		courses
	})
})

router.get('/:id/edit', async (req, res) => {
	if (!req.query.allow) {
		return res.redirect('/')
	}
	
	const course = await Course.findById(req.params.id).lean()
	// console.log(course)
	res.render('course-edit', {
		title: `Edit ${course.title}`,
		course
	})
})

router.post('/edit', async (req, res) => {
	try {
		const { id } = req.body
		// console.log("req.id", id)
		delete req.body.id
		await Course.findByIdAndUpdate(id, req.body)
	} catch (error) {
		console.error(error);
	}
	

	res.redirect('/courses')
})

router.get('/:id', async (req, res) => {
	// console.log(req.params.id)
	const course = await Course.findById(req.params.id).lean()
	// console.log(course.title)

	res.render('course', {
		layout: 'empty',
		title: `Course ${course.title}`,
		course
	})
})

module.exports = router
const mongoose = require('mongoose')
const Student = require('./models/students')

const uri = 'mongodb://localhost:27017/hogwarts'

mongoose
  .connect(uri)
  .then(() => {
    console.log(`Successfully connected to: ${uri}`)
  })
  .catch(err => console.log(err.message))


const createStudents = () => {
  const hermione = new Student({
    firstName: 'Shawn',
    lastName: 'Santiago',
    birthday: new Date('June 5 1990'),
    house: 'Hogwarts',
    married: true,
    titles: [
      'Prefect',
      'Deputy Head of the Department of Magical Law Enforcement',
      'Leader of S.P.E.W',
      'Minister for Magic'
    ],
    height: 9999
  })
  hermione
    .save()
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.log(err)
    })
}

Student.remove({}).then(createStudents)

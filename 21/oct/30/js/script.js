import Task from './Task.js'

const masturbate = new Task({title: 'masturbate'})
const getDrunk = new Task({title: 'get drunk'})
const startFucking = new Task({title: 'start fucking'})
const assFingering = new Task({title: 'ass fingering'})
assFingering.toggleDone()
const doFisting = new Task({title: 'do fisting'})
const fuck = new Task({
  title: 'fuck',
  children: [assFingering, doFisting]
})
const endFucking = new Task({title: 'end fucking'})


const fuckMe = new Task({
  title: 'Fuck me',
  children: [
    masturbate,
    getDrunk,
    startFucking,
    fuck,
    endFucking
  ]
})

fuckMe.render()

console.log(fuckMe);
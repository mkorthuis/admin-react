
module.exports = {
  path: 'patient',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/NewPatient'))
    })
  }
}

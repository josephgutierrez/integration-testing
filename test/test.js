const {expect} = require('chai')
const app = require('../index')
const request = require('request')

describe('running server requests', () => {
  var server
  before('start server',(done) => {
    server = app.listen(3000, () => {
      done()
    })
  })

  describe('checks GET requests', () => {
    it('should return list of notes', (done) => {
      request.get('http://localhost:3000/notes', (err, res, body) => {
        expect(res.body).to.be.a.array
        done()
      })
    })
  })

  describe('checks POST requests', () => {
    it('should make and return a new note', (done) => {
      request.post('http://localhost:3000/notes', (err, res, body) => {
        expect(res.body).to.be.a.array
        done()
      })
    })
  })

  after('stop server', () => {
    server.close()
  })
})

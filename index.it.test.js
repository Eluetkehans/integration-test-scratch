const request = require("request-promise")
const server = require('./index')

var handle;
beforeAll(() => {
  handle = server(4200)
})

afterAll(() => {
  handle()
})

it('should hit /', () => {
  return request("http://localhost:4200", { json: true }).then(body => expect(body.hello).toEqual(true))
})

// it('should error on uncaught timeout', () => {
//   return request("http://localhost:4200/hangtime", { json: true }).then(body => expect(body).toEqual('nope'))
// })
const request = require("request-promise")

it('should hit /', () => {
  return request("http://localhost:8080", { json: true }).then(body => expect(body.hello).toEqual(true))
})
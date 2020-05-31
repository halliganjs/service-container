import { Container } from '../../src/Container'

describe('Container: reset()', function () {
  it('should reset the fake bindings', function () {
    const container = new Container()

    container.instance('testing', {})
    container.fake('testing', {})

    container.reset()

    this.assert.equal(container.getFakes().size, 0)
    this.assert.equal(container.bindings.size, 1)
  })

  it('should reset both the fake and actual bindings if the reset is hard', function () {
    const container = new Container()

    container.instance('testing', {})
    container.fake('testing', {})

    container.reset(true)

    this.assert.equal(container.getFakes().size, 0)
    this.assert.equal(container.bindings.size, 0)
  })

  it('should return the container', function () {
    const container = new Container()

    this.assert.equal(container.reset(), container)
  })
})

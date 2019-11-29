import { Container } from '../../src/Container'

describe('Container: getProviders()', function () {
  it('should return the providers', function () {
    const container = new Container()

    const provider = () => {}

    container.provider(provider)

    this.assert.isArray(container.getProviders())
    this.assert.lengthOf(container.getProviders(), 1)
    this.assert.equal(container.getProviders()[0], provider)
  })
})

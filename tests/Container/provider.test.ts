import { Container } from '../../src/Container'

describe('Container: provider()', function () {
  it('should run the provider', function () {
    const provider = this.sinon.spy()

    const container = new Container()

    container.provider(provider)

    this.assert.calledOnce(provider)
    this.assert.calledWith(provider.firstCall, container)
  })

  it('should store the provider', function () {
    const provider = this.sinon.spy()

    const container = new Container()

    container.provider(provider)

    this.assert.include(container.getProviders(), provider)
  })

  it('should return the container', function () {
    const provider = this.sinon.spy()

    const container = new Container()

    this.assert.equal(container.provider(provider), container)
  })
})

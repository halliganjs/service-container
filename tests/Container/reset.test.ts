import { Container } from '../../src/Container'
import { ContainerInterface } from '../../src/interfaces/ContainerInterface'

describe('Container: reset()', function () {
  it('should reset the bindings', function () {
    const container = new Container()

    container.instance('testing', {})

    container.reset()

    this.assert.deepEqual(container.getBindings(), {})
  })

  it('should rerun the providers if the reset is soft', function () {
    const container = new Container()

    const firstValue = {}
    const secondValue = {}

    const provider = (container: ContainerInterface) => container.instance('testing', firstValue)

    container.provider(provider)

    container.instance('testing', secondValue)

    container.reset()

    this.assert.equal(container.make('testing'), firstValue)
  })

  it('should rerun the providers if the reset is hard', function () {
    const container = new Container()

    const provider = (container: ContainerInterface) => container.instance('one', {})

    container.provider(provider)

    container.instance('two', {})

    container.reset(true)

    this.assert.deepEqual(container.getBindings(), {})
    this.assert.deepEqual(container.getProviders(), [])
  })

  it('should return the container', function () {
    const container = new Container()

    this.assert.equal(container.reset(), container)
  })
})

import { Container } from '../../src/Container'

describe('Container: singleton()', function () {
  it('should add the binding to the collection of bindings', function () {
    const value = () => {}
    const container = new Container()

    this.assert.notProperty(container.getBindings(), 'testing')

    container.singleton('testing', value)

    this.assert.property(container.getBindings(), 'testing')
    this.assert.isTrue(container.getBindings().testing.isSingleton())
    this.assert.equal(container.getBindings().testing.getResolver(), value)
  })

  it('should replace the binding in the collection of bindings', function () {
    const firstValue = () => {}
    const secondValue = () => {}

    const container = new Container()

    container.singleton('testing', firstValue)
    container.singleton('testing', secondValue)

    this.assert.property(container.getBindings(), 'testing')
    this.assert.isTrue(container.getBindings().testing.isSingleton())
    this.assert.equal(container.getBindings().testing.getResolver(), secondValue)
  })
})

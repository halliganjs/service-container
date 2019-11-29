import { Container } from '../../src/Container'

describe('Container: binding()', function () {
  it('should add the binding to the collection of bindings', function () {
    const value = () => {}
    const container = new Container()

    this.assert.notProperty(container.getBindings(), 'testing')

    container.binding('testing', value)

    this.assert.property(container.getBindings(), 'testing')
    this.assert.isTrue(container.getBindings().testing.isFactory())
    this.assert.equal(container.getBindings().testing.getResolver(), value)
  })

  it('should replace the binding in the collection of bindings', function () {
    const firstValue = () => {}
    const secondValue = () => {}

    const container = new Container()

    container.binding('testing', firstValue)
    container.binding('testing', secondValue)

    this.assert.property(container.getBindings(), 'testing')
    this.assert.isTrue(container.getBindings().testing.isFactory())
    this.assert.equal(container.getBindings().testing.getResolver(), secondValue)
  })
})

import { Container } from '../../src/Container'
import { Factory } from '../../src/bindings/Factory'

describe('Container: binding()', function () {
  it('should add the binding to the collection of bindings', function () {
    const value = () => {}
    const container = new Container()

    this.assert.notProperty(container.getBindings(), 'testing')

    container.binding('testing', value)

    this.assert.property(container.getBindings(), 'testing')
    this.assert.instanceOf(container.getBindings().testing, Factory)
  })

  it('should replace the binding in the collection of bindings', function () {
    const firstValue = () => {}
    const secondValue = () => {}

    const container = new Container()

    container.binding('testing', firstValue)

    const firstBinding = container.getBindings().testing

    container.binding('testing', secondValue)

    this.assert.property(container.getBindings(), 'testing')
    this.assert.instanceOf(container.getBindings().testing, Factory)
    this.assert.notEqual(container.getBindings().testing, firstBinding)
  })
})

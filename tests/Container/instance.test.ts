import { Container } from '../../src/Container'
import { Instance } from '../../src/bindings/Instance'

describe('Container: instance()', function () {
  it('should add the binding to the collection of bindings', function () {
    const value = {}
    const container = new Container()

    this.assert.notProperty(container.getBindings(), 'testing')

    container.instance('testing', value)

    this.assert.property(container.getBindings(), 'testing')
    this.assert.instanceOf(container.getBindings().testing, Instance)
  })

  it('should replace the binding in the collection of bindings', function () {
    const firstValue = {}
    const secondValue = {}

    const container = new Container()

    container.instance('testing', firstValue)

    const firstInstance = container.getBindings().testing

    container.instance('testing', secondValue)

    this.assert.property(container.getBindings(), 'testing')
    this.assert.instanceOf(container.getBindings().testing, Instance)
    this.assert.notEqual(container.getBindings().testing, firstInstance)
  })
})

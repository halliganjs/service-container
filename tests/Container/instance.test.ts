import { Container } from '../../src/Container'
import { Instance } from '../../src/bindings/Instance'

describe('Container: instance()', function () {
  it('should add the binding to the collection of bindings', function () {
    const value = {}
    const container = new Container()

    this.assert.notProperty(container.bindings, 'testing')

    container.instance('testing', value)

    this.assert.hasAnyKeys(container.bindings, ['testing'])
    this.assert.instanceOf(container.bindings.get('testing'), Instance)
  })

  it('should replace the binding in the collection of bindings', function () {
    const firstValue = {}
    const secondValue = {}

    const container = new Container()

    container.instance('testing', firstValue)

    const firstInstance = container.bindings.get('testing')

    container.instance('testing', secondValue)

    this.assert.hasAnyKeys(container.bindings, ['testing'])
    this.assert.instanceOf(container.bindings.get('testing'), Instance)
    this.assert.notEqual(container.bindings.get('testing'), firstInstance)
  })
})

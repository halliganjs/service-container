import { Container } from '../../src/Container'
import { Factory } from '../../src/bindings/Factory'

describe('Container: binding()', function () {
  it('should add the binding to the collection of bindings', function () {
    const value = () => {}
    const container = new Container()

    this.assert.notProperty(container.bindings, 'testing')

    container.binding('testing', value)

    this.assert.hasAnyKeys(container.bindings, ['testing'])
    this.assert.instanceOf(container.bindings.get('testing'), Factory)
  })

  it('should replace the binding in the collection of bindings', function () {
    const firstValue = () => {}
    const secondValue = () => {}

    const container = new Container()

    container.binding('testing', firstValue)

    const firstBinding = container.bindings.get('testing')

    container.binding('testing', secondValue)

    this.assert.hasAnyKeys(container.bindings, ['testing'])
    this.assert.instanceOf(container.bindings.get('testing'), Factory)
    this.assert.notEqual(container.bindings.get('testing'), firstBinding)
  })
})

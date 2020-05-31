import { Container } from '../../src/Container'
import { Singleton } from '../../src/bindings/Singleton'

describe('Container: singleton()', function () {
  it('should add the binding to the collection of bindings', function () {
    const value = () => {}
    const container = new Container()

    this.assert.notProperty(container.bindings, 'testing')

    container.singleton('testing', value)

    this.assert.hasAnyKeys(container.bindings, ['testing'])
    this.assert.instanceOf(container.bindings.get('testing'), Singleton)
  })

  it('should replace the binding in the collection of bindings', function () {
    const firstValue = () => {}
    const secondValue = () => {}

    const container = new Container()

    container.singleton('testing', firstValue)

    const firstBinding = container.bindings.get('testing')

    container.singleton('testing', secondValue)

    this.assert.hasAnyKeys(container.bindings, ['testing'])
    this.assert.instanceOf(container.bindings.get('testing'), Singleton)
    this.assert.notEqual(container.bindings.get('testing'), firstBinding)
  })
})

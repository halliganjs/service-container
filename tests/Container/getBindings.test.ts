import { Binding } from '../../src/bindings/Binding'
import { Container } from '../../src/Container'

describe('Container: getBindings()', function () {
  it('should return the bindings', function () {
    const container = new Container()

    const value = {}

    container.instance('testing', value)

    this.assert.instanceOf(container.getBindings(), Map)
    this.assert.hasAnyKeys(container.getBindings(), ['testing'])
    this.assert.instanceOf(container.getBindings().get('testing'), Binding)
    this.assert.equal(container.getBindings().get('testing')!.getValue(), value)
  })
})

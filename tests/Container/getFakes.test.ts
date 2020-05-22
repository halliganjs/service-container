import { BindingMap } from '../../src/BindingMap'
import { Binding } from '../../src/bindings/Binding'
import { Container } from '../../src/Container'

describe('Container: getFakes()', function () {
  it('should return the fake bindings', function () {
    const container = new Container()

    const value = {}

    container.fake('testing', value)

    this.assert.instanceOf(container.getFakes(), BindingMap)
    this.assert.hasAnyKeys(container.getFakes(), ['testing'])
    this.assert.instanceOf(container.getFakes().get('testing'), Binding)
    this.assert.equal(container.getFakes().get('testing')!.getValue(), value)
  })
})

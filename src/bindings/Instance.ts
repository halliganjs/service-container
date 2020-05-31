import { Binding } from './Binding'
import { InstanceInterface } from '../interfaces/bindings/InstanceInterface'

export class Instance extends Binding implements InstanceInterface {
  /**
   * Resolve and return the value of the binding.
   *
   * @return {any}
   */
  public resolve (): any {
    return this.value
  }
}

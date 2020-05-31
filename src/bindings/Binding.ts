import { BindingInterface } from '../interfaces/bindings/BindingInterface'
import { ContainerInterface } from '../interfaces/ContainerInterface'

export abstract class Binding implements BindingInterface {
  /**
   * @var {any} value
   */
  public value: any = null

  /**
   * Create a new instance of Binding.
   *
   * @param {any = null}  value
   */
  public constructor (value: any = null) {
    this.value = value
  }

  /**
   * Resolve and return the value of the binding.
   *
   * @param  {ContainerInterface} container
   * @return {any}
   */
  public abstract resolve(container: ContainerInterface): any
}

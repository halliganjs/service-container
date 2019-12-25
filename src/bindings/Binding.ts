import { BindingInterface } from '../interfaces/bindings/BindingInterface'
import { ContainerInterface } from '../interfaces/ContainerInterface'

export abstract class Binding implements BindingInterface {
  /**
   * @var {any} _value
   */
  protected _value: any = null

  /**
   * Create a new instance of Binding.
   *
   * @param {any = null}  value
   */
  public constructor (value: any = null) {
    this._value = value
  }

  /**
   * Retrieve the value of the value property.
   *
   * @return {any}
   */
  public getValue (): any {
    return this._value
  }

  /**
   * Set the value of the value property.
   *
   * @param  {any}  value
   * @return {this}
   */
  public setValue (value: any): this {
    this._value = value
    return this
  }

  /**
   * Resolve and return the value of the binding.
   *
   * @param  {ContainerInterface} container
   * @return {any}
   */
  public abstract resolve(container: ContainerInterface): any
}

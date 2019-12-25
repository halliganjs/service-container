import { ContainerInterface } from '../ContainerInterface'

export interface BindingInterface {
  /**
   * Retrieve the value of the value property.
   *
   * @return {any}
   */
  getValue (): any

  /**
   * Set the value of the value property.
   *
   * @param  {any}  value
   * @return {this}
   */
  setValue (value: any): this

  /**
   * Resolve and return the value of the binding.
   *
   * @param  {ContainerInterface} container
   * @return {any}
   */
  resolve(container: ContainerInterface): any
}

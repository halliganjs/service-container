import { ContainerInterface } from '../ContainerInterface'

export interface BindingInterface {
  /**
   * @var {any} value
   */
  value: any

  /**
   * Resolve and return the value of the binding.
   *
   * @param  {ContainerInterface} container
   * @return {any}
   */
  resolve(container: ContainerInterface): any
}

import { ContainerInterface } from '../ContainerInterface'

export interface BindingInterface {
  /**
   * Resolve and return the value of the binding.
   *
   * @param  {ContainerInterface} container
   * @return {any}
   */
  resolve(container: ContainerInterface): any
}

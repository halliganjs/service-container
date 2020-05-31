import { ContainerInterface } from '../interfaces/ContainerInterface'
import { FactoryInterface } from '../interfaces/bindings/FactoryInterface'
import { ResolverBinding } from './ResolverBinding'

export class Factory extends ResolverBinding implements FactoryInterface {
  /**
   * Resolve and return the value of the binding.
   *
   * @param  {ContainerInterface} container
   * @return {any}
   */
  public resolve (container: ContainerInterface): any {
    return this.resolver(container)
  }
}

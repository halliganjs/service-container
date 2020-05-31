import { ContainerInterface } from '../interfaces/ContainerInterface'
import { ResolverBinding } from './ResolverBinding'
import { SingletonInterface } from '../interfaces/bindings/SingletonInterface'

export class Singleton extends ResolverBinding implements SingletonInterface {
  /**
   * Resolve and return the value of the binding.
   *
   * @param  {ContainerInterface} container
   * @return {any}
   */
  public resolve (container: ContainerInterface): any {
    if (this.hasResolved === false) {
      this.value = this.resolver(container)
      this.hasResolved = true
    }

    return this.value
  }
}

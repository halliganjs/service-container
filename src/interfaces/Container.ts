import { ProviderInterface } from './Provider'
import { ResolverInterface } from './Resolver'

export interface ContainerInterface {
  instance (key: string, value: any): this
  singleton (key: string, resolver: ResolverInterface): this
  binding (key: string, resolver: ResolverInterface): this
  make (key: string): any

  /**
   * Add a service provider into the container to register one or many bindings
   * as a unit. Provider instances are stored for soft resets.
   *
   * @param  {ProviderInterface} provider
   * @return {this}
   */
  provider (provider: ProviderInterface): this

  /**
   * Reset the container so that existing bindings are removed and stored
   * providers are re-run. If a hard request is run, the both the bindings and
   * providers will be emptied.
   *
   * @param  {boolean} hard
   * @return {this}
   */
  reset (hard: boolean): this
}

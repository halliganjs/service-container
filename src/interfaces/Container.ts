import { ProviderInterface } from './Provider'
import { ResolverInterface } from './Resolver'

export interface ContainerInterface {
  /**
   * Bind a single instance or value into the container under the provided key.
   *
   * @param  {string} key
   * @param  {any}    value
   * @return {this}
   */
  instance (key: string, value: any): this

  /**
   * Bind a resolver function into the container under the provided key. The
   * resolver will be run once and the resulting value will be returned for all
   * subsequent resolutions.
   *
   * @param  {string}            key
   * @param  {ResolverInterface} resolver
   * @return {this}
   */
  singleton (key: string, resolver: ResolverInterface): this

  /**
   * Bind a resolver function into the container under the provided key. The
   * resolver will be run each time the key is resolved resulting in new
   * instances each resolution.
   *
   * @param  {string}            key
   * @param  {ResolverInterface} resolver
   * @return {this}
   */
  binding (key: string, resolver: ResolverInterface): this

  /**
   * Resolve a value from the container by its key.
   *
   * @param  {string} key
   * @return {any}
   */
  make (key: string): any

  /**
   * Add a service provider into the container to register one or many bindings
   * as a unit. Provider functions are stored for soft resets.
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

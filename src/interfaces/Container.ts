import { ResolverInterface } from './Resolver'

export interface ContainerInterface {
  instance (key: string, value: any): this
  singleton (key: string, resolver: ResolverInterface): this
  binding (key: string, resolver: ResolverInterface): this
  make (key: string): any
}

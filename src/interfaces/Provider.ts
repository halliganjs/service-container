import { ContainerInterface } from './Container'

export interface ProviderInterface {
  register (container: ContainerInterface): void
}

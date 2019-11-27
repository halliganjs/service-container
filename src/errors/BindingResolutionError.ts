export class BindingResolutionError extends Error {
  /**
   * Create a new instance of BindingResolutionError.
   *
   * @param {string} key
   */
  constructor (key: string) {
    super(`Failed to resolve a binding with the key '${key}' from the service container.`)
  }
}

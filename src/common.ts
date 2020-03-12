export enum LoadingStatus {
  NOT_INITIALIZED = 'NOT_INITIALIZED',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  HAS_ERROR = 'HAS_ERROR',
}

export type IsLoadingField = { isLoading: LoadingStatus }

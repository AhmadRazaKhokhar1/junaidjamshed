
export interface FirebaseCrudParameters<T> {
  collection: string;
  data?: Partial<T>;
  id?: string;
}

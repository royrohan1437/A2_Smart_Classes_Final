/** Minimal contract for typed persistence adapters; domain services own the business rules. */
export interface Repository<TEntity, TId = string> {
  findById(id: TId): Promise<TEntity | null>;
}

export interface WritableRepository<TEntity, TCreate, TUpdate, TId = string> extends Repository<
  TEntity,
  TId
> {
  create(input: TCreate): Promise<TEntity>;
  update(id: TId, input: TUpdate): Promise<TEntity>;
}

export interface Service<TInput, TOutput> {
  execute(input: TInput): Promise<TOutput>;
}

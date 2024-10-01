export interface BaseRepository<Domain, Entity> {
  toDomain(entity: Entity): Domain;
  toEntity(domain: Domain): Partial<Entity>;
}

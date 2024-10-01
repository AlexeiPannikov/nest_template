export class BaseModel<Model> {
    constructor(obj?: Partial<Model>) {
        Object.assign(this, obj);
    }
}

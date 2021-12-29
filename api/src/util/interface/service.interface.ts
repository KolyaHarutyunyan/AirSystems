
export interface IService {
  create(dto: any): Promise<any>;
  edit(id: string, dto: any): Promise<any>;
  getById(id: string): Promise<any>;
  getAll(): Promise<any>;
  getRaw(id: string): Promise<any>;
}

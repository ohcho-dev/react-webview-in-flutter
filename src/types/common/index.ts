export interface ChildType {
  id: number;
  image?: string;
  parent_id?: number;
  name: string;
  gender: string;
  birth_date: string;
  premature_flag: number;
  due_date?: string;
  birth_modifiable?: boolean;
}

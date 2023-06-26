export interface createChildType {
  name: string;
  gender: string;
  birth_date: string;
  premature_flag: number;
  due_date?: string;
}

export interface OptionType {
  name: string;
  value: string | number;
}

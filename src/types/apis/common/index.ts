export interface CommonCodeItemType {
  name: string;
  group: string;
  label: string;
  descriptionn: string;
  order: number;
  usage: number;
  code_group: {
    name: string;
    prefix: string;
    description: string;
  };
}

export interface HomeDataResponseType {
  birth_date: string;
  days_from_birth: number;
  image: string;
  month_level_content: MonthContent[];
  month_level_info: string[];
  name: string;
}

export interface MonthContent {
  id: number;
  image: string;
  subject: string;
  url: string;
}

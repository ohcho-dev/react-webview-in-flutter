import { ChildType } from "types/common";

export interface AuthMeResponseType {
  id: number;
  name: string;
  sns_kind: string;
  sns_id: string;
  email: string;
  status: string;
  last_logged_in: string;
  last_selected_child: number;
  children: ChildType[];
}

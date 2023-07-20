export interface CreateChildObjType {
  name: string;
  gender: "M" | "F";
  birth_date: string;
  premature_flag: number;
  due_date: string;
}

interface ApplyProgramPayment {
  payment_price: number;
  payment_code: string;
  payment_status: "PYST_COMPLETE" | "PYST_BEFORE" | "PYST_CANCEL";
  payment_status_label: string;
}

export interface AppliedCoachingType extends ApplyProgramPayment {
  child_birth_date: string;
  child_gender: "F" | "M";
  child_name: string;
  coaching_name: string;
  id: number;
  main_image: string;
}

export interface AppliedClassType extends ApplyProgramPayment {
  id: number;
  class_name: string;
  class_payment_type: "CLPYT_ONSITE" | "CLPYT_DIRECT";
  class_payment_type_label: string;
  class_place_type: "CLPLT_ONLINE" | "CLPLT_OFFLINE";
  class_place_type_label: string;
  child_name: string;
  child_birth_date: string;
  child_gender: "M" | "F";
  main_image: string;
}

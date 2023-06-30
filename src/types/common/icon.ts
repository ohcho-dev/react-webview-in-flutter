export type icon = {
  path: string;
  viewBox: string;
  fill: string;
};

export interface IconProps {
  icon: iconName; // 아이콘 종류
  size: number;
  fill?: string;
}

export type iconName =
  | "home-plus"
  | "calendar_ver2"
  | "chevron-right"
  | "chevron-left"
  | "big-chevron";

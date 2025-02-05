export interface MenuItem {
  text: string;
  action: () => void;
  icon?: React.ReactNode;
}

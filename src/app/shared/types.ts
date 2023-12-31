export interface INavLink {
  url?: string;
  name: string;
  icon: string;
  expanded?: boolean;
  sublinks?: INavLink[];
  located?: 'top' | 'bottom';
}

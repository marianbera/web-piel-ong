export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavSection {
  label: string;
  href: string;
  links: NavLink[];
}

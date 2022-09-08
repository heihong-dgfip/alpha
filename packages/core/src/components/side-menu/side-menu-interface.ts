export type SidemenuLink = {
  label: string,
  url?: string,
  subEntries?: Array<SidemenuLink>,
  customClass?: string,
  ariaExpanded?: string
};

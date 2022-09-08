export type SelectOption = { text: string, value: string };
export type SelectGroup = { label: string, options: SelectOption[] };
export type SelectItem = SelectOption | SelectGroup;

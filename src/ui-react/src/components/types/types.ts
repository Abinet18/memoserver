export type OneToTen = undefined | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Spacing = 0 | OneToTen;

export type XS = boolean | OneToTen | 11 | 12;

export type Option = {
  value: string;
  label: string;
  group?: string;
};


export type StyleColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'default'
  | undefined;

export type KeyValue = { key: string; value?: string };

export type AlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | undefined;

  export type Direction =
  | 'row'
  | 'column'
  | 'column-reverse'
|  'row-reverse'
  | undefined;

export type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;


export type MatchGroups = { [key: string]: { title: string; list: string[] } };

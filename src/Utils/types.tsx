export type Cardprops = {
  name: string;
  image: string;
  job: string;
};

export type Userprops = {
  fullName: string;
  image: string;
  job: string;
  biographie: string;
};

export type paramsProps = {
  params: {
    id: string;
  };
};

export type Cardsprops = {
  title: string;
  children: React.ReactNode;
};

export type Usersprops = {
  title: string;
  children: React.ReactNode;
};
export enum statusType {
  Online,
  Offline,
  Busy,
}
export type ProfileProps = {
  image: string;
  fullName: string;
  status: statusType;
};

export type setTodos = {
  setTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
};

export type todoType = {
  id: number;
  title: string;
  date: string;
  checked: boolean;
};
export type propItem = todoType & {
  setTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
};

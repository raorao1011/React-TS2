export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed?: boolean; //?付けることで必須じゃなくてもOKになる
};

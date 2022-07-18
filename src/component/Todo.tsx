/*
  既存の型を元にいらないプロパティを省く
  パターン①: Pick使用ver
  Pick<使用する型, "使うプロパティ①" | "使うプロパティ②">

  パターン②: Omit使用ver
  Pick<使用する型, "省くプロパティ①">
*/

import { FC } from 'react';
import { TodoType } from '../types/todo';

export const Todo: FC<Omit<TodoType, 'id'>> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? '[完]' : '[未]';

  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};

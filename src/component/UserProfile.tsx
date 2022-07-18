import userEvent from '@testing-library/user-event';
import { FC } from 'react';
import { User } from '../types/User';

/*
  propsのは複数のuser情報が入ってくる

  point: hobbiesがオプショナル(?)なので
  user.hobbiesをjsx内で使用する際はオプショナルチェイニング使用する！
*/
type Props = {
  user: User;
};

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(' / ')}</dd>
    </dl>
  );
};

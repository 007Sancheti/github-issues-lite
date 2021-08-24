import React from 'react';
import './user-with-avatar.scss';

const UserWithAvatar = ({ user, orientation = 'vertical', link = true }) => {
  const Wrapper = link ? 'a' : 'span';
  return (
    <Wrapper href={`https://github.com/${user.login}`} className={`issue__user ${orientation}`}>
      <img className="issue__user__avatar" src={user.avatar_url} alt=""/>
      <div className="issue__user__name">{user.login}</div>
    </Wrapper>
  );
};

export default UserWithAvatar;
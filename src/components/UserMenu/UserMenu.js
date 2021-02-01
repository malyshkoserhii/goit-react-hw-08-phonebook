import s from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, </span>
      <button type="button">Sign Out</button>
    </div>
  );
}

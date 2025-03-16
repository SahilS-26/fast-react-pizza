import { useSelector } from 'react-redux';
import { selectUsername } from '../features/user/userSlice';

function Username() {
  const username = useSelector(selectUsername);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;

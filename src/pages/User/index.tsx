import Button from '../../components/Button';
import { useAuth } from '../../shared/hooks/useAuth';

const UserPage = () => {
  const {logout, user} = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div>
        Hi, <b>{user?.name}!</b>
      </div>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  )
}

export default UserPage;
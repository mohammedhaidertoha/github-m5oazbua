import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '@/auth/auth';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getUser();
        if (!user) {
          navigate('/sign-in');
        }
      } catch (error) {
        navigate('/sign-in');
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, [navigate]);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return children;
};

export default ProtectedRoute; 
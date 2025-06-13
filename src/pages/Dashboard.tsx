import { useNavigate } from 'react-router-dom';
import { signOut } from '@/auth/auth';
import { useAuth } from '@/auth/AuthProvider';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/sign-in');
  };

  if (loading) {
    return (
      <Layout>
        <section className="py-20 lg:py-24 bg-pa-dark flex items-center justify-center">
          <p className="text-pa-text">Loading...</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      children={
        <section className="py-20 lg:py-24 bg-pa-dark flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl text-pa-text">Welcome to your Dashboard</h1>
            {user && <p className="text-pa-text-secondary mt-2">Signed in as {user.email}</p>}
            <Button onClick={handleSignOut} className="mt-4 bg-pa-text text-pa-black hover:bg-pa-text-secondary">
              Sign Out
            </Button>
          </div>
        </section>
      }
    />
  );
};

export default Dashboard; 
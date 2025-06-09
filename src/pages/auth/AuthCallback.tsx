import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/Layout';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        navigate('/dashboard');
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate]);

  return (
    <Layout>
      <section className="py-20 lg:py-24 bg-pa-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-pa-text">Verifying your authentication</h1>
          <p className="text-pa-text-secondary mt-2">Please wait while we redirect you...</p>
        </div>
      </section>
    </Layout>
  );
};

export default AuthCallback; 
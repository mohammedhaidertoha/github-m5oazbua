import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from '@/auth/auth';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setIsUpdating(true);
      }
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage('');
    try {
      await sendPasswordResetEmail(email);
      setMessage('Password reset link has been sent to your email.');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setMessage('Your password has been updated successfully.');
      setTimeout(() => navigate('/sign-in'), 3000);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (isUpdating) {
    return (
      <Layout>
        <section className="py-20 lg:py-24 bg-pa-dark flex items-center justify-center">
          <Card className="w-full max-w-md bg-pa-card border-pa-card-light shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-3xl text-pa-text">Update Password</CardTitle>
              <CardDescription className="text-pa-text-secondary">Enter your new password below.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handlePasswordUpdate}>
                <div>
                  <Label htmlFor="password" className="text-pa-text-muted">New Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-pa-text-muted" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="pl-10 bg-pa-dark border-pa-card-light text-pa-text"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {message && <p className="text-green-500 text-sm">{message}</p>}
                <Button type="submit" size="lg" className="w-full bg-pa-text text-pa-black hover:bg-pa-text-secondary">
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 lg:py-24 bg-pa-dark flex items-center justify-center">
        <Card className="w-full max-w-md bg-pa-card border-pa-card-light shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-3xl text-pa-text">Reset Password</CardTitle>
            <CardDescription className="text-pa-text-secondary">
              Enter your email to receive a password reset link.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handlePasswordReset}>
              <div>
                <Label htmlFor="email" className="text-pa-text-muted">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-pa-text-muted" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="pl-10 bg-pa-dark border-pa-card-light text-pa-text"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {message && <p className="text-green-500 text-sm">{message}</p>}
              <Button type="submit" size="lg" className="w-full bg-pa-text text-pa-black hover:bg-pa-text-secondary">
                Send Reset Link
              </Button>
            </form>
            <div className="mt-4 text-center">
                <Link to="/sign-in" className="text-sm font-medium text-pa-text-secondary hover:underline">
                    Back to Sign In
                </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default ResetPassword; 
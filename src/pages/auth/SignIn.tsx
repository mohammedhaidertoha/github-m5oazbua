import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '@/auth/auth';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signIn({ email, password });
      navigate('/dashboard');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Layout>
      <section className="py-20 lg:py-24 bg-pa-dark flex items-center justify-center">
        <Card className="w-full max-w-md bg-pa-card border-pa-card-light shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-3xl text-pa-text">Sign In</CardTitle>
            <CardDescription className="text-pa-text-secondary">
              Don't have an account?{' '}
              <Link to="/sign-up" className="font-medium text-pa-text hover:underline">
                Sign up
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSignIn}>
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
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-pa-text-muted">Password</Label>
                  <Link to="/reset-password" className="text-sm font-medium text-pa-text-secondary hover:underline">
                    Forgot Password?
                  </Link>
                </div>
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
              <Button type="submit" size="lg" className="w-full bg-pa-text text-pa-black hover:bg-pa-text-secondary">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default SignIn; 
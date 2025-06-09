import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '@/auth/auth';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      navigate('/check-email');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Layout>
      <section className="py-20 lg:py-24 bg-pa-dark flex items-center justify-center">
        <Card className="w-full max-w-md bg-pa-card border-pa-card-light shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-3xl text-pa-text">Create an Account</CardTitle>
            <CardDescription className="text-pa-text-secondary">
              Already have an account?{' '}
              <Link to="/sign-in" className="font-medium text-pa-text hover:underline">
                Sign in
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSignUp}>
              <div>
                <Label htmlFor="fullName" className="text-pa-text-muted">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-pa-text-muted" />
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="pl-10 bg-pa-dark border-pa-card-light text-pa-text"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
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
                <Label htmlFor="password" className="text-pa-text-muted">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-pa-text-muted" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="pl-10 bg-pa-dark border-pa-card-light text-pa-text"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="text-pa-text-muted">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-pa-text-muted" />
                  <Input id="confirmPassword" name="confirmPassword" type="password" required className="pl-10 bg-pa-dark border-pa-card-light text-pa-text" placeholder="••••••••" />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" size="lg" className="w-full bg-pa-text text-pa-black hover:bg-pa-text-secondary">
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default SignUp; 
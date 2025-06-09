import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MailCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckEmail = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-24 bg-pa-dark flex items-center justify-center">
        <Card className="w-full max-w-md bg-pa-card border-pa-card-light shadow-xl text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pa-text/10 mb-4">
                <MailCheck className="h-6 w-6 text-pa-text-secondary" />
            </div>
            <CardTitle className="font-heading text-3xl text-pa-text">Check your email</CardTitle>
            <CardDescription className="text-pa-text-secondary">
                We've sent a confirmation link to your email address. Please click the link to activate your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-pa-text-muted">
                Didn't receive an email? Check your spam folder or
            </p>
            <Button variant="link" className="text-pa-text-secondary">
                resend the confirmation link.
            </Button>
            <div className="mt-4">
                <Link to="/sign-in" className="text-sm font-medium text-pa-text hover:underline">
                    Back to Sign In
                </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default CheckEmail; 
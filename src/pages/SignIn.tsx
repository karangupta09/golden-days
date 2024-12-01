import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const navigate = useNavigate();
  const location = useLocation();
  const credentials = location.state as { email: string; password: string } | null;

  useEffect(() => {
    if (session) {
      navigate('/');
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      if (event === 'SIGNED_IN' && currentSession) {
        navigate('/');
      }
      if (event === 'USER_UPDATED' && currentSession) {
        navigate('/');
      }
      if (event === 'SIGNED_OUT') {
        navigate('/signin');
      }
    });

    // If credentials are provided, auto-fill the form
    if (credentials) {
      const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
      const passwordInput = document.querySelector('input[name="password"]') as HTMLInputElement;
      
      if (emailInput && passwordInput) {
        emailInput.value = credentials.email;
        passwordInput.value = credentials.password;
      }
    }

    return () => {
      subscription.unsubscribe();
    };
  }, [session, navigate, supabase.auth, credentials]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <Button
        variant="ghost"
        onClick={() => navigate('/')}
        className="mb-6 hover:bg-white/50 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Button>

      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <img
            src="/lovable-uploads/cd1b4251-9f89-4fc3-8dbb-f804c4b0ef51.png"
            alt="GoldenDays Logo"
            className="mx-auto h-16 w-16 cursor-pointer hover:scale-105 transition-transform"
          />
          <h2 className="mt-4 text-3xl font-bold text-primary">Welcome to GoldenDays</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Auth
              supabaseClient={supabase}
              appearance={{ 
                theme: ThemeSupa,
                style: {
                  button: { background: 'rgb(var(--primary))', color: 'white' },
                  anchor: { color: 'rgb(var(--primary))' },
                }
              }}
              theme="light"
              providers={[]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
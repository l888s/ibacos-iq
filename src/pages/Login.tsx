
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import HCaptcha, { HCaptchaRef } from '@/components/HCaptcha';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  
  const captchaRef = useRef<HCaptchaRef>(null);
  const navigate = useNavigate();
  const { login, signUp, isAuthenticated } = useAuth();

  // Get hCaptcha site key from Supabase project settings
  // You'll need to replace this with your actual hCaptcha site key
  const HCAPTCHA_SITE_KEY = '10000000-ffff-ffff-ffff-000000000001'; // Replace with your actual site key

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/');
    return null;
  }

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleCaptchaError = () => {
    setError('Captcha verification failed. Please try again.');
    setCaptchaToken(null);
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken(null);
    setError('Captcha expired. Please verify again.');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setError('Please complete the captcha verification.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error } = await login(email, password, captchaToken);
      
      if (error) {
        setError(error.message || 'Login failed');
        // Reset captcha on error
        if (captchaRef.current) {
          captchaRef.current.reset();
        }
        setCaptchaToken(null);
      } else {
        toast({ title: "Success", description: "Logged in successfully" });
        navigate('/');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setError('Please complete the captcha verification.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error } = await signUp(email, password, name, captchaToken);
      
      if (error) {
        setError(error.message || 'Sign up failed');
        // Reset captcha on error
        if (captchaRef.current) {
          captchaRef.current.reset();
        }
        setCaptchaToken(null);
      } else {
        toast({ 
          title: "Success", 
          description: "Account created successfully. Please check your email for verification." 
        });
        setActiveTab('login');
        setEmail('');
        setPassword('');
        setName('');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setError('');
    setCaptchaToken(null);
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-xl">IQ</span>
          </div>
          <CardTitle className="text-2xl">IbacosIQ</CardTitle>
          <CardDescription>Quality inspection management system</CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeTab} onValueChange={(value) => {
            setActiveTab(value);
            resetForm();
          }}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="flex justify-center">
                  <HCaptcha
                    ref={captchaRef}
                    siteKey={HCAPTCHA_SITE_KEY}
                    onVerify={handleCaptchaVerify}
                    onError={handleCaptchaError}
                    onExpired={handleCaptchaExpired}
                  />
                </div>
                
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading || !captchaToken}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Login
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <Label htmlFor="signup-name">Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                
                <div>
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                
                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="flex justify-center">
                  <HCaptcha
                    ref={captchaRef}
                    siteKey={HCAPTCHA_SITE_KEY}
                    onVerify={handleCaptchaVerify}
                    onError={handleCaptchaError}
                    onExpired={handleCaptchaExpired}
                  />
                </div>
                
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading || !captchaToken}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

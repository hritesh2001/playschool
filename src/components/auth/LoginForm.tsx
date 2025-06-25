
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

type Props = {
  onToggleForm: () => void;
};

const LoginForm: React.FC<Props> = ({ onToggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-2 border-edu-purple border-opacity-30">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold text-center">Welcome Back!</CardTitle>
        <CardDescription className="text-center">
          Enter your details to sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="student@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="edu-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="edu-input"
            />
          </div>
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full edu-btn bg-edu-purple hover:bg-edu-purple/90"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="text-center mt-2">
          <span className="text-sm text-gray-500">Demo accounts: student@example.com / password123</span>
        </div>
        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <button
            onClick={onToggleForm}
            className="text-edu-blue font-semibold hover:underline"
            type="button"
          >
            Sign up
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;

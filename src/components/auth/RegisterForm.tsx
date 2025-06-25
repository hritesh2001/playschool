
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  onToggleForm: () => void;
};

const RegisterForm: React.FC<Props> = ({ onToggleForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'parent' | 'teacher'>('student');
  const [grade, setGrade] = useState<'LKG' | 'UKG' | '1' | '2' | '3' | '4' | '5' | ''>('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Only pass grade if role is student and grade is selected
      if (role === 'student' && grade) {
        await register(name, email, password, role, grade as any);
      } else {
        await register(name, email, password, role);
      }
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-2 border-edu-purple border-opacity-30">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold text-center">Create an Account</CardTitle>
        <CardDescription className="text-center">
          Enter your details to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="edu-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
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
          <div className="space-y-2">
            <Label htmlFor="role">I am a</Label>
            <Select 
              value={role} 
              onValueChange={(value) => setRole(value as any)}
            >
              <SelectTrigger id="role" className="edu-input">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {role === 'student' && (
            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Select 
                value={grade} 
                onValueChange={setGrade as any}
              >
                <SelectTrigger id="grade" className="edu-input">
                  <SelectValue placeholder="Select your grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LKG">LKG</SelectItem>
                  <SelectItem value="UKG">UKG</SelectItem>
                  <SelectItem value="1">Class 1</SelectItem>
                  <SelectItem value="2">Class 2</SelectItem>
                  <SelectItem value="3">Class 3</SelectItem>
                  <SelectItem value="4">Class 4</SelectItem>
                  <SelectItem value="5">Class 5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          <Button 
            type="submit" 
            disabled={isLoading || (role === 'student' && !grade)}
            className="w-full edu-btn bg-edu-blue hover:bg-edu-blue/90"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-center">
        <div>
          <span>Already have an account? </span>
          <button
            onClick={onToggleForm}
            className="text-edu-purple font-semibold hover:underline"
            type="button"
          >
            Sign in
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { useEffect } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-edu-blue/10 to-edu-purple/10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-edu-purple mb-2 animate-float">LearnPlay</h1>
        <p className="text-lg text-gray-600">Fun Learning for Young Minds</p>
      </div>
      
      <div className="w-full max-w-md">
        {isLogin ? (
          <LoginForm onToggleForm={toggleForm} />
        ) : (
          <RegisterForm onToggleForm={toggleForm} />
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="fixed -z-10 top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-edu-yellow rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-edu-blue rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-10 left-1/4 w-52 h-52 bg-edu-green rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
};

export default Auth;

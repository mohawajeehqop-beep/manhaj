import React, { useEffect, useState } from 'react';
import { useAuthStore } from './store';
import { supabase } from './lib/supabase';
import DayScreen from './screens/DayScreen';
import WeekScreen from './screens/WeekScreen';
import MonthScreen from './screens/MonthScreen';
import YearScreen from './screens/YearScreen';
import ReviewScreen from './screens/ReviewScreen';
import AuthScreen from './screens/AuthScreen';
import BottomNav from './components/BottomNav';

function App() {
  const { user, isAuthenticated, setUser } = useAuthStore();
  const [currentTab, setCurrentTab] = useState('day');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
        });
      }
      setLoading(false);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
        });
      } else {
        setUser(null);
      }
    });

    return () => subscription?.unsubscribe();
  }, [setUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthScreen />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-tajawal" dir="rtl">
      <div className="flex-1 overflow-auto pb-20">
        {currentTab === 'day' && <DayScreen />}
        {currentTab === 'week' && <WeekScreen />}
        {currentTab === 'month' && <MonthScreen />}
        {currentTab === 'year' && <YearScreen />}
        {currentTab === 'review' && <ReviewScreen />}
      </div>
      <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
    </div>
  );
}

export default App;

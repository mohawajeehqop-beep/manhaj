import React, { useState } from 'react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

interface DailyReflection {
  id: string;
  date: string;
  accomplished: string;
  distractions: string;
}

interface WeeklyReflection {
  id: string;
  week: string;
  summary: string;
  learnings: string;
}

export default function ReviewScreen() {
  const [dailyReflections] = useState<DailyReflection[]>([
    {
      id: '1',
      date: '2026-06-01',
      accomplished: 'أكملت المشروع الأساسي وحضرت الاجتماع',
      distractions: 'التنقل بين التطبيقات، الإشعارات',
    },
    {
      id: '2',
      date: '2026-05-31',
      accomplished: 'اجتماع مع الفريق، تخطيط أسبوعي',
      distractions: 'المكالمات الهاتفية، البريد الإلكتروني',
    },
  ]);

  const [weeklyReflections] = useState<WeeklyReflection[]>([
    {
      id: '1',
      week: 'الأسبوع 1 (يونيو)',
      summary: 'أسبوع منتج جداً، أكملت المشاريع الرئيسية',
      learnings: 'تحديد الأولويات أساسي للإنتاجية',
    },
    {
      id: '2',
      week: 'الأسبوع 4 (مايو)',
      summary: 'تحديات في التركيز لكن حققنا الأهداف',
      learnings: 'الاستراحة المنتظمة تحسن الأداء',
    },
  ]);

  return (
    <div className="p-6 space-y-6" dir="rtl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-primary mb-2">شاشة المراجعات</h2>
        <p className="text-gray-600">سجل مراجعاتك اليومية والأسبوعية</p>
      </div>

      {/* Daily Reflections */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">المراجعات اليومية</h3>
        <div className="space-y-4">
          {dailyReflections.map((reflection) => (
            <div key={reflection.id} className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200 shadow-md">
              <h4 className="font-bold text-blue-900 mb-3">
                {format(new Date(reflection.date), 'EEEE d MMMM', { locale: ar })}
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-blue-800 mb-1">✓ ما أنجزته:</label>
                  <p className="text-gray-700 bg-white p-2 rounded">{reflection.accomplished}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-800 mb-1">⚡ ما صرف انتباهي:</label>
                  <p className="text-gray-700 bg-white p-2 rounded">{reflection.distractions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Reflections */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">المراجعات الأسبوعية</h3>
        <div className="space-y-4">
          {weeklyReflections.map((reflection) => (
            <div key={reflection.id} className="bg-gradient-to-r from-purple-50 to-purple-100 p-5 rounded-xl border-2 border-purple-200 shadow-md">
              <h4 className="font-bold text-purple-900 mb-3">{reflection.week}</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-purple-800 mb-1">📊 ملخص الأسبوع:</label>
                  <p className="text-gray-700 bg-white p-2 rounded">{reflection.summary}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-purple-800 mb-1">💡 الدروس المستفادة:</label>
                  <p className="text-gray-700 bg-white p-2 rounded">{reflection.learnings}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Reflection Area */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-200">
        <h3 className="text-xl font-bold text-green-900 mb-4">مساحة تأملات حرة</h3>
        <textarea
          placeholder="اكتب تأملاتك وملاحظاتك الشخصية هنا..."
          className="w-full px-4 py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          rows={5}
        />
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition">
          حفظ التأملات
        </button>
      </section>
    </div>
  );
}

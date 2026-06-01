import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { format, getDaysInMonth, startOfMonth } from 'date-fns';
import { ar } from 'date-fns/locale';

interface MonthlyProject {
  id: string;
  title: string;
  progress: number;
  dueDate: string;
}

export default function MonthScreen() {
  const [projects, setProjects] = useState<MonthlyProject[]>([
    { id: '1', title: 'مشروع شهري 1', progress: 45, dueDate: '2026-06-15' },
    { id: '2', title: 'مشروع شهري 2', progress: 70, dueDate: '2026-06-20' },
    { id: '3', title: 'مشروع شهري 3', progress: 20, dueDate: '2026-06-25' },
  ]);

  const today = new Date();
  const monthName = format(today, 'MMMM yyyy', { locale: ar });
  const daysInMonth = getDaysInMonth(today);
  const startDate = startOfMonth(today);

  const renderCalendar = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition min-h-24 flex flex-col"
        >
          <span className="font-bold text-primary">{i}</span>
          <p className="text-xs text-gray-500 mt-auto">{i % 3 === 0 ? 'مناسبة' : ''}</p>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="p-6 space-y-6" dir="rtl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-primary mb-2">شاشة الشهر</h2>
        <p className="text-gray-600">{monthName}</p>
      </div>

      {/* Projects */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">المشاريع الشهرية</h3>
          <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition">
            <Plus size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-gray-800">{project.title}</h4>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">النسبة المئوية</span>
                  <span className="font-bold text-primary">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-500">الموعد النهائي: {format(new Date(project.dueDate), 'd MMM', { locale: ar })}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calendar Grid */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-4">تقويم الشهر</h3>
        <div className="grid grid-cols-7 gap-2">
          {['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'].map((day) => (
            <div key={day} className="text-center font-bold text-primary py-2">
              {day}
            </div>
          ))}
          {renderCalendar()}
        </div>
      </section>
    </div>
  );
}

# منهج - تطبيق إدارة الوقت الشخصي

## 🎯 نظرة عامة
تطبيق ويب متكامل لإدارة الوقت الشخصي باعتماد نظام الطبقات الأربع (سنوي، شهري، أسبوعي، يومي).

## ✨ الميزات الرئيسية

### 1. **شاشة اليوم** 📅
- 3 مربعات للمهام الكبرى مع إمكانية تحديد الإنجاز
- قائمة مهام عادية مرنة
- قسم جلسة العمل العميق مع مؤقت حي
- نموذج مراجعة سريع (إنجازات و انشغالات)

### 2. **شاشة الأسبوع** 📊
- عرض أفقي لأيام الأسبوع
- 3 مهام كبرى تحت كل يوم
- السحب والإفلات لنقل المهام بين الأيام (dnd-kit)

### 3. **شاشة الشهر** 🗓️
- تقويم شبكي تفاعلي
- حتى 3 مشاريع شهرية مع شريط تقدم
- المواعيد الثابتة والملاحظات

### 4. **شاشة السنة** 🎯
- إدارة الأدوار الحياتية (صحة، عائلة، عمل، إلخ)
- أهداف سنوية تحت كل دور
- تقسيم السنة إلى 4 مواسم (تركيز، تعافي، نمو، تقييم)

### 5. **شاشة المراجعات** 📝
- سجل يومي للمراجعات
- سجل أسبوعي للملخصات
- مساحة تأملات حرة

### 6. **المصادقة** 🔐
- تسجيل دخول/إنشاء حساب عبر Supabase
- حفظ البيانات على السحابة

### 7. **الإشعارات** 🔔 (قادمة)
- تذكير صباحي بالمهام الكبرى
- تذكير قبل بدء جلسة العمل العميق

## 🛠️ التقنيات المستخدمة

- **React 18** - واجهة المستخدم
- **TypeScript** - الأمان والنوع
- **TailwindCSS** - التصميم
- **Supabase** - قاعدة البيانات والمصادقة
- **Zustand** - إدارة الحالة
- **dnd-kit** - السحب والإفلات
- **date-fns** - معالجة التواريخ
- **Lucide React** - الأيقونات

## 🚀 البدء السريع

### المتطلبات
- Node.js 16+
- حساب Supabase

### التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/mohawajeehqop-beep/manhaj.git
cd manhaj

# تثبيت المتعلقات
npm install

# إنشاء ملف .env
cp .env.example .env

# إضافة مفاتيح Supabase
# VITE_SUPABASE_URL=your_url
# VITE_SUPABASE_ANON_KEY=your_key

# تشغيل الخادم
npm run dev
```

### البناء للإنتاج

```bash
npm run build
npm run preview
```

## 📊 جداول قاعدة البيانات

```sql
-- الأدوار الحياتية
CREATE TABLE roles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- الأهداف السنوية
CREATE TABLE yearly_goals (
  id UUID PRIMARY KEY,
  role_id UUID REFERENCES roles,
  title TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- المواسم
CREATE TABLE seasons (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  name TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  focus_type TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- المشاريع الشهرية
CREATE TABLE monthly_projects (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  title TEXT NOT NULL,
  progress INTEGER DEFAULT 0,
  target_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- المهام الأسبوعية
CREATE TABLE weekly_tasks (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  title TEXT NOT NULL,
  day TEXT,
  priority INTEGER DEFAULT 3,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- المهام اليومية
CREATE TABLE daily_tasks (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  title TEXT NOT NULL,
  priority INTEGER DEFAULT 3,
  big_task BOOLEAN DEFAULT FALSE,
  completed BOOLEAN DEFAULT FALSE,
  date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- جلسات العمل العميق
CREATE TABLE deep_work_sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  duration INTEGER,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- المراجعات
CREATE TABLE reflections (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  type TEXT (daily | weekly),
  accomplished TEXT,
  distractions TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 📱 واجهة المستخدم

التطبيق مصمم بـ:
- **اتجاه RTL** لدعم اللغة العربية
- **خط Tajawal** الجميل
- **ألوان متناسقة**: أزرق (أساسي)، بنفسجي (ثانوي)، وردي (ركيزة)
- **شريط تنقل سفلي** سهل الاستخدام

## 🔐 المصادقة

استخدام Supabase Auth مع:
- تسجيل دخول/إنشاء حساب بالبريد الإلكتروني
- حفظ الجلسة محلياً
- تحديث التطبيق تلقائياً عند تسجيل دخول/خروج

## 🎨 التصميم

- **RTL First**: جميع العناصر مصممة للغة العربية
- **Responsive**: يعمل على جميع الأجهزة
- **Dark Mode Ready**: جاهز للتوسع

## 📝 الملاحظات

المشروع يتضمن:
- مكونات وهمية (Mock Data) للبدء السريع
- معالجة أخطاء أساسية
- حفظ الحالة محلياً
- اتصال Supabase جاهز للربط

## 🚧 المرحلة القادمة

- [ ] الإشعارات (Push API)
- [ ] السحب والإفلات المتقدم
- [ ] التصدير والطباعة
- [ ] الوضع الليلي
- [ ] مزامنة الفريق

## 📄 الترخيص

MIT

## 👨‍💻 المساهمة

نرحب بالمساهمات! يرجى:
1. عمل Fork للمستودع
2. إنشاء فرع للميزة الجديدة
3. عمل Commit للتغييرات
4. عمل Push للفرع
5. فتح Pull Request

---

**تم بناء هذا التطبيق بحب ❤️ للمساعدة في تنظيم حياتك الشخصية والمهنية.**

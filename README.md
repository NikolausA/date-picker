# 📅 Super Date Picker

**Super Date Picker** — это настраиваемый компонент выбора диапазона дат и времени, вдохновлённый [Elastic EUI Super Date Picker](https://eui.elastic.co/docs/components/forms/date-and-time/super-date-picker/). Компонент поддерживает выбор абсолютных и относительных диапазонов, предустановки (presets), и предоставляет внешний колбэк `onChange` для получения выбранных значений.

## 🚀 Функциональность

- ✅ Режимы выбора:
  - **Absolute** — ручной выбор начала и конца диапазона.
  - **Relative** — выбор относительных значений (например, "последние 15 минут").
- ✅ Поддержка предустановленных диапазонов (presets) в режиме relative.
- ✅ Управление состоянием через Context API + useReducer.
- ✅ Колбэк `onChange` для передачи значений наружу.
- ✅ Адаптивный пользовательский интерфейс на Tailwind CSS.
- ✅ Архитектура с разделением по FSD-подходу.

## 📂 Структура проекта

src/
└── features/
└── super-date-picker/
├── model/ # Состояние и логика (context, provider, reducer, types)
├── ui/ # UI-компоненты (DatePickerInner, ModeSwitcher, AbsoluteRange, RelativeRange и т.д.)
└── SuperDatePicker.tsx # Внешний компонент-обертка

## ⚙️ Установка и запуск

```bash
git clone https://github.com/NikolausA/date-picker.git
cd date-picker
npm install
npm run dev
```

# Flashy Contenido 🚀

Agencia de Marketing Digital - Next.js 15 + TypeScript + SCSS Modules con sistema de temas Light/Dark mode.

---

## ⚡ Quick Start

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar desarrollo
npm run dev              # http://localhost:3000

# 3. Build para producción
npm run build
npm run start
```

---

## 📦 Stack

- **Next.js 15** - App Router + Server Components
- **TypeScript** - Type safety completo
- **SCSS Modules** - Scoped styling
- **Google Fonts** - Inter + Bebas Neue
- **Theme System** - Light/Dark mode automático

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx              # Root layout con ThemeProvider y fuentes
│   ├── page.tsx                # Homepage
│   └── page.module.scss        # Estilos de la homepage
├── components/
│   ├── custom/                 # 🎨 TUS COMPONENTES PERSONALIZADOS
│   ├── ui/
│   │   ├── Button/             # Componente Button con variantes
│   │   └── Card/               # Componente Card con variantes
│   ├── Header/                 # Header con ThemeToggle
│   └── ThemeToggle/            # Botón cambiar tema
├── styles/
│   ├── globals.scss            # Variables CSS + estilos globales
│   └── theme/
│       └── _mixins.scss        # Mixins SCSS (responsive, utils)
└── lib/
    └── theme.tsx               # ThemeProvider + useTheme hook
```

---

## 🎨 Sistema de Temas

### **Theme Toggle**
El botón en la esquina superior derecha cambia entre Light y Dark mode.

### **Variables CSS disponibles:**

```scss
// Colores
--color-primary, --color-secondary
--color-bg, --color-bg-secondary, --color-bg-tertiary
--color-text, --color-text-secondary
--color-border, --color-border-hover

// Espaciado
--spacing-xs, --spacing-sm, --spacing-md,
--spacing-lg, --spacing-xl, --spacing-2xl

// Tipografía
--font-size-xs hasta --font-size-5xl

// Border Radius
--radius-sm, --radius-md, --radius-lg, --radius-full

// Transiciones
--transition-fast, --transition-base, --transition-slow
```

### **Mixins SCSS:**

```scss
@use '@/styles/theme/mixins' as *;

.miClase {
  @include md { }          // Responsive >= 768px
  @include lg { }          // >= 1024px
  @include flex-center;    // Display flex centrado
  @include container;      // Container con max-width
}
```

---

## 🔤 Fuentes Google

### **Inter** (Sans-serif)
- Uso: Textos generales, párrafos, UI
- Weights: 100 - 900
- Variable: `var(--font-inter)`

```scss
.text {
  font-family: var(--font-inter), sans-serif;
  font-weight: var(--font-weight-medium); // 500
}
```

### **Bebas Neue** (Display)
- Uso: Títulos grandes, headings
- Weight: 400
- Variable: `var(--font-bebas-neue)`

```scss
.title {
  font-family: var(--font-bebas-neue), "Impact", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
```

**Ver `FONTS_GUIDE.md` para más ejemplos**

---

## 🧩 Componentes UI Base

### Button

```tsx
import Button from '@/components/ui/Button/Button';

<Button variant="primary" size="lg">Click</Button>
```

**Variants:** `primary`, `secondary`, `outline`, `ghost`
**Sizes:** `sm`, `md`, `lg`

### Card

```tsx
import Card from '@/components/ui/Card/Card';

<Card variant="elevated" padding="lg">
  Contenido
</Card>
```

**Variants:** `default`, `bordered`, `elevated`
**Padding:** `none`, `sm`, `md`, `lg`

---

## 🎯 Crear Componentes

### 1. Crea tu componente en `src/components/custom/`

```tsx
// src/components/custom/MiComponente/MiComponente.tsx
import styles from './MiComponente.module.scss';

export default function MiComponente() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mi Componente</h2>
    </div>
  );
}
```

### 2. Estilos con SCSS Modules

```scss
// src/components/custom/MiComponente/MiComponente.module.scss
@use '@/styles/theme/mixins' as *;

.container {
  padding: var(--spacing-lg);
  background-color: var(--color-bg-secondary);

  @include md {
    padding: var(--spacing-xl);
  }
}

.title {
  font-family: var(--font-bebas-neue), sans-serif;
  font-size: var(--font-size-3xl);
  color: var(--color-text);
}
```

---

## 🔧 Scripts Disponibles

```bash
npm run dev              # Desarrollo (localhost:3000)
npm run build            # Build producción
npm run start            # Servidor producción
npm run lint             # ESLint
```

---

## 📚 Documentación

- [FONTS_GUIDE.md](./FONTS_GUIDE.md) - Guía completa de fuentes
- [Next.js Docs](https://nextjs.org/docs)
- [SCSS Modules](https://nextjs.org/docs/app/building-your-application/styling/sass)

---

## 💡 Tips

- **Modo Dark:** Click en el botón de la esquina superior derecha
- **Variables CSS:** Usa `var(--color-primary)` en tus estilos
- **Responsive:** Usa los mixins `@include md`, `@include lg`
- **Fuentes:** Inter para texto, Bebas Neue para títulos
- **Theme:** Todo se adapta automáticamente al modo light/dark

---

## 🚀 Próximos Pasos

1. ✅ Proyecto configurado
2. ✅ Theme Light/Dark funcionando
3. ✅ Fuentes Inter y Bebas Neue listas
4. 🎨 **Crear tus componentes** en `src/components/custom/`
5. 🎨 **Usar las variables CSS** del tema
6. 🎨 **Experimentar** con los componentes UI base

---

**¡Tu proyecto Next.js está listo para crear!** 🎉

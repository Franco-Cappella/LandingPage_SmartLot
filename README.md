# 🚀 LandingPRO: Smartlot

Bienvenido al repositorio de **Smartlot**, una Landing Page premium, altamente optimizada y diseñada para conversiones. Este proyecto está construido con un enfoque estricto en rendimiento, accesibilidad y animaciones fluidas a 60fps.

## 🛠 Tech Stack Principal

- **Core:** React 18 + JavaScript (ES6+)
- **Build Tool:** Vite (para un HMR ultrarrápido y builds optimizados)
- **Estilos:** Tailwind CSS (Utility-first, responsive, Dark/Light mode ready)
- **Animaciones:** GSAP (GreenSock Animation Platform) + `@gsap/react`

## 📂 Arquitectura del Proyecto

El proyecto sigue una estructura modular para escalar de forma predecible:

```text
src/
├── components/          # Componentes de UI modulares y reutilizables
│   ├── Hero.jsx         # Sección principal (Above the fold)
│   ├── BentoGrid.jsx    # Layout moderno de características (UI/UX Pro Max)
│   ├── StatsTicker.jsx  # Animación de estadísticas en bucle continuo
│   ├── Demo.jsx         # Sección interactiva del producto
│   ├── Contact.jsx      # Formulario de conversión y CTA final
│   └── Navbar.jsx       # Navegación principal y control de estado
├── App.jsx              # Composición principal de la landing
├── main.jsx             # Punto de entrada y providers
└── index.css            # Directivas de Tailwind y variables CSS globales
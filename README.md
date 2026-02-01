# 👕 Tincho Camisetas

Landing page para la venta de camisetas deportivas de alto rendimiento inspiradas en la maratón de Sidney.

![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss&logoColor=white)

## 🌐 Demo

- **Preview**: [https://id-preview--03495632-b26f-4034-87a0-b688552925b2.lovable.app](https://id-preview--03495632-b26f-4034-87a0-b688552925b2.lovable.app)
- **Producción**: [https://sydney-dream-boost.lovable.app](https://sydney-dream-boost.lovable.app)

## ✨ Características

- 🎨 **Diseño moderno** con estética deportiva premium
- 📱 **100% Responsive** - Optimizado para móvil, tablet y desktop
- 🖼️ **Galería interactiva** de productos
- 📏 **Guía de medidas** con diagrama técnico de la camiseta
- 📝 **Modal de pedidos** integrado
- ⚡ **Rendimiento optimizado** con Vite
- 🎭 **Animaciones suaves** con Framer Motion

## 📏 Medidas del Producto

| Medida | Valor |
|--------|-------|
| Largo buso | 72 cm |
| Largo manga | 23 cm |
| Contorno manga | 36 cm |
| Ancho pecho | 44 cm |
| Ancho espalda | 44 cm |
| Cintura | 102 cm |

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o bun

### Instalación

```bash
# Clonar repositorio
git clone <URL_DEL_REPOSITORIO>

# Entrar al directorio
cd tincho-camisetas

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:8080`

## 📁 Estructura del Proyecto

```
src/
├── assets/              # Imágenes del producto
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   ├── Footer.tsx      # Pie de página
│   ├── Gallery.tsx     # Galería de imágenes
│   ├── Header.tsx      # Cabecera y navegación
│   ├── Hero.tsx        # Sección principal
│   ├── MeasurementsGuide.tsx  # Guía de medidas
│   ├── OrderModal.tsx  # Modal de pedidos
│   ├── Product.tsx     # Información del producto
│   ├── SizeFinder.tsx  # Buscador de talla
│   ├── SocialProof.tsx # Testimonios
│   └── Story.tsx       # Historia del producto
├── hooks/              # Hooks personalizados
├── lib/                # Utilidades
├── pages/              # Páginas
└── test/               # Tests
```

## 🛠️ Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
| `npm run lint` | Ejecutar ESLint |
| `npm run test` | Ejecutar tests |

## 🎨 Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de estilos
- **shadcn/ui** - Componentes accesibles
- **React Router** - Enrutamiento SPA
- **Lucide React** - Iconos
- **React Hook Form** - Formularios
- **Zod** - Validación de esquemas

## 📖 Documentación

- [📥 Guía de Instalación](docs/INSTALACION.md)
- [🚀 Guía de Despliegue](docs/DESPLIEGUE.md)

## 🌐 Despliegue

### Lovable (Recomendado)
1. Abrir proyecto en Lovable
2. Clic en "Publish"
3. ¡Listo!

### Otras opciones
- Vercel
- Netlify
- GitHub Pages
- Servidor propio

Ver [Guía de Despliegue](docs/DESPLIEGUE.md) para instrucciones detalladas.

## 🤝 Contribuir

1. Fork del repositorio
2. Crear rama de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto es propietario. Todos los derechos reservados.

---

<p align="center">
  <strong>Tincho 2026</strong> - Hecho con ❤️
</p>

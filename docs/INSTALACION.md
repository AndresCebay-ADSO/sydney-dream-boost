# Guía de Instalación - Tincho Camisetas

## Requisitos Previos

### Software Necesario
- **Node.js**: versión 18.0.0 o superior
- **npm** o **bun**: gestor de paquetes
- **Git**: para clonar el repositorio

### Verificar Instalación de Node.js
```bash
node --version
# Debe mostrar v18.0.0 o superior

npm --version
# Debe mostrar 9.0.0 o superior
```

## Instalación Paso a Paso

### 1. Clonar el Repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd tincho-camisetas
```

### 2. Instalar Dependencias
```bash
# Con npm
npm install

# O con bun (más rápido)
bun install
```

### 3. Iniciar el Servidor de Desarrollo
```bash
# Con npm
npm run dev

# O con bun
bun run dev
```

El servidor se iniciará en `http://localhost:8080`

## Estructura del Proyecto

```
tincho-camisetas/
├── public/                 # Archivos estáticos públicos
│   ├── favicon.ico
│   ├── favicon.png
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/            # Imágenes y recursos
│   │   ├── camisa-detalle.jpg
│   │   ├── camisa-espalda.png
│   │   ├── camisa-pecho.png
│   │   ├── camiseta-berlin.png
│   │   ├── camiseta-medidas.png
│   │   ├── hero.webp
│   │   ├── sidney-1.jpg
│   │   ├── sidney-2.avif
│   │   └── sidney-3.jpg
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes de UI (shadcn)
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MeasurementsGuide.tsx
│   │   ├── NavLink.tsx
│   │   ├── OrderModal.tsx
│   │   ├── Product.tsx
│   │   ├── SizeFinder.tsx
│   │   ├── SocialProof.tsx
│   │   └── Story.tsx
│   ├── hooks/            # Hooks personalizados
│   ├── lib/              # Utilidades
│   ├── pages/            # Páginas de la aplicación
│   ├── test/             # Tests
│   ├── App.tsx           # Componente principal
│   ├── App.css           # Estilos globales
│   ├── index.css         # Estilos Tailwind
│   └── main.tsx          # Punto de entrada
├── docs/                  # Documentación
├── package.json          # Dependencias
├── tailwind.config.ts    # Configuración Tailwind
├── vite.config.ts        # Configuración Vite
└── tsconfig.json         # Configuración TypeScript
```

## Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| React | 18.3.1 | Biblioteca de UI |
| TypeScript | 5.x | Tipado estático |
| Vite | 5.x | Build tool |
| Tailwind CSS | 3.x | Framework CSS |
| shadcn/ui | - | Componentes de UI |
| React Router | 6.x | Enrutamiento |
| Lucide React | 0.462.0 | Iconos |

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Previsualiza build de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run test` | Ejecuta tests con Vitest |

## Solución de Problemas

### Error: Puerto 8080 en uso
```bash
# Cambiar puerto en vite.config.ts
server: {
  port: 3000  # Cambiar a otro puerto
}
```

### Error: Módulos no encontrados
```bash
# Limpiar cache y reinstalar
rm -rf node_modules
rm package-lock.json
npm install
```

### Error: Versión de Node incorrecta
Usar nvm para gestionar versiones:
```bash
nvm install 18
nvm use 18
```

## Contacto

Para soporte técnico, contactar al equipo de desarrollo.

---
**Tincho 2026** - Todos los derechos reservados

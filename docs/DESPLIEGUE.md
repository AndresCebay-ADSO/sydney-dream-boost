# Guía de Despliegue - Tincho Camisetas

## Opciones de Despliegue

### 1. Lovable (Recomendado)

La forma más sencilla de desplegar la aplicación.

#### Pasos:
1. Abrir el proyecto en [Lovable](https://lovable.dev)
2. Hacer clic en **"Publish"** (esquina superior derecha)
3. Confirmar el despliegue
4. La aplicación estará disponible en: `https://sydney-dream-boost.lovable.app`

#### Dominio Personalizado:
1. Ir a **Project > Settings > Domains**
2. Clic en **"Connect Domain"**
3. Configurar los registros DNS según las instrucciones
4. Esperar propagación (hasta 48 horas)

---

### 2. Vercel

#### Requisitos:
- Cuenta en [Vercel](https://vercel.com)
- Repositorio en GitHub

#### Pasos:
1. Conectar repositorio de GitHub a Vercel
2. Configurar proyecto:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Hacer clic en **Deploy**

#### Variables de Entorno (si aplica):
```
VITE_API_URL=https://api.ejemplo.com
```

---

### 3. Netlify

#### Requisitos:
- Cuenta en [Netlify](https://netlify.com)
- Repositorio en GitHub

#### Pasos:
1. Conectar repositorio
2. Configuración de build:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Deploy

#### Archivo de configuración `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 4. GitHub Pages

#### Pasos:

1. Instalar gh-pages:
```bash
npm install -D gh-pages
```

2. Agregar scripts a `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configurar base en `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/nombre-repositorio/',
  // ... resto de configuración
})
```

4. Ejecutar:
```bash
npm run deploy
```

---

### 5. Servidor Propio (VPS/Dedicado)

#### Requisitos:
- Servidor con Node.js instalado
- Nginx o Apache como servidor web
- SSL (Let's Encrypt recomendado)

#### Pasos:

1. **Compilar la aplicación**:
```bash
npm run build
```

2. **Subir carpeta `dist`** al servidor

3. **Configurar Nginx**:
```nginx
server {
    listen 80;
    server_name tudominio.com;
    root /var/www/tincho-camisetas/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Caché de assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

4. **Configurar SSL con Certbot**:
```bash
sudo certbot --nginx -d tudominio.com
```

---

## Configuración de Producción

### Optimizaciones de Build

El proyecto ya incluye optimizaciones automáticas:
- Minificación de JavaScript y CSS
- Compresión de imágenes
- Tree shaking
- Code splitting

### Variables de Entorno

Crear archivo `.env.production`:
```env
VITE_APP_TITLE=Tincho Camisetas
VITE_API_URL=https://api.produccion.com
```

### Verificación Post-Despliegue

- [ ] Verificar que todas las páginas cargan correctamente
- [ ] Probar el formulario de pedido
- [ ] Verificar imágenes de la galería
- [ ] Comprobar responsividad en móvil
- [ ] Verificar velocidad con PageSpeed Insights
- [ ] Comprobar SSL activo (HTTPS)

---

## Monitoreo y Mantenimiento

### Herramientas Recomendadas
- **Google Analytics**: Análisis de tráfico
- **Sentry**: Monitoreo de errores
- **UptimeRobot**: Monitoreo de disponibilidad

### Actualizaciones
```bash
# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Corregir vulnerabilidades
npm audit fix
```

---

## Rollback

En caso de problemas:

### Lovable:
- Acceder al historial de versiones en el proyecto
- Revertir al commit anterior

### Vercel/Netlify:
- Acceder al dashboard
- Ir a Deployments
- Seleccionar deployment anterior
- Promote to Production

---

## Contacto

Para soporte de despliegue, contactar al equipo de desarrollo.

---
**Tincho 2026** - Todos los derechos reservados

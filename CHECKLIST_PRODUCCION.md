# ✅ Checklist Pre-Deploy a Producción

## 🔴 CRÍTICO - Debes hacer ANTES del commit

### 1. Variables de Entorno en Vercel
- [ ] Ir a tu proyecto en Vercel
- [ ] Settings → Environment Variables
- [ ] Agregar: `VITE_WHATSAPP_NUMBER=573112866538`
- [ ] (Opcional) Agregar: `VITE_SITE_URL=https://tu-dominio.com`

### 2. Verificar que .env NO esté en Git
- [ ] Ejecutar: `git status` y verificar que `.env` NO aparezca
- [ ] Si aparece, agregarlo al `.gitignore` (ya está incluido)

### 3. Build de Producción
- [ ] Ejecutar: `npm run build`
- [ ] Verificar que compile sin errores
- [ ] Revisar la carpeta `dist/` se creó correctamente

### 4. Pruebas Locales
- [ ] Probar el formulario de pedido completo
- [ ] Verificar que WhatsApp se abre correctamente
- [ ] Probar en móvil (responsive)
- [ ] Verificar que las imágenes cargan correctamente

---

## 🟡 IMPORTANTE - Verificar después del deploy

### 5. Post-Deploy en Vercel
- [ ] Verificar que el sitio carga correctamente
- [ ] Probar el formulario de pedido en producción
- [ ] Verificar que WhatsApp funciona
- [ ] Revisar la consola del navegador (no debería haber errores)
- [ ] Verificar que las imágenes cargan

### 6. SEO y Meta Tags
- [ ] Probar compartir en Facebook (verificar preview)
- [ ] Probar compartir en Twitter (verificar preview)
- [ ] Verificar que el título y descripción aparecen correctamente

### 7. Performance
- [ ] Ejecutar PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Verificar que el score sea > 80
- [ ] Revisar que las imágenes se cargan con lazy loading

---

## ✅ Cambios Implementados (Ya están listos)

- ✅ Sistema de logging condicional (no hay console.log en producción)
- ✅ Validación mejorada del teléfono
- ✅ Manejo de errores con toast notifications
- ✅ Persistencia de datos en localStorage
- ✅ Loading states en el modal
- ✅ SEO mejorado con meta tags completos
- ✅ Lazy loading de imágenes
- ✅ .gitignore actualizado (incluye .env)
- ✅ vercel.json configurado
- ✅ NotFound.tsx usa logger en lugar de console.error

---

## 📝 Notas Importantes

1. **Variables de Entorno**: El número de WhatsApp tiene un fallback, pero es mejor configurarlo en Vercel
2. **URLs Hardcodeadas**: Las URLs en `index.html` están bien para meta tags (son estáticas)
3. **Build**: Vercel ejecutará `npm run build` automáticamente
4. **Cache**: Los assets tienen cache de 1 año configurado en vercel.json

---

## 🚀 Comandos para Deploy

```bash
# 1. Verificar cambios
git status

# 2. Agregar cambios
git add .

# 3. Commit
git commit -m "feat: mejoras de producción - validación, loading states, SEO"

# 4. Push a main
git push origin main

# Vercel desplegará automáticamente
```

---

## ⚠️ Si algo falla después del deploy

1. Revisar los logs en Vercel Dashboard
2. Verificar variables de entorno en Vercel
3. Verificar que el build compiló correctamente
4. Revisar la consola del navegador para errores

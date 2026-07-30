# E.A. Studio

Tienda online de ropa masculina de alta gama construida con **Next.js App Router**, TypeScript, Tailwind CSS, Framer Motion y Zustand. Checkout por WhatsApp (sin pasarelas de pago).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Zustand (carrito persistente)

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio: hero, colección destacada, manifiesto |
| `/productos` | Catálogo con filtros, búsqueda y ordenamiento |
| `/productos/[id]` | Detalle de producto |
| `/nosotros` | Historia y filosofía de marca |
| `/contacto` | Formulario de contacto (UI) |
| `/carrito` | Vista dedicada del carrito + checkout WhatsApp |
| `/auth/login` | Login (maqueta con validación) |
| `/auth/registro` | Registro (maqueta con validación) |

## Cómo empezar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## WhatsApp checkout

Configurá el número de ventas en `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5491155681881
```

Al finalizar el pedido, la app genera un mensaje con ítems, talles, colores y total, y abre `https://wa.me/...` listo para enviar.

## Scripts

```bash
npm run dev      # desarrollo
npm run build    # build de producción
npm run start    # servidor de producción
npm run lint     # ESLint
```

## Notas de portafolio

- Autenticación y formulario de contacto son **solo UI** con validación en cliente.
- Imágenes desde Unsplash (`images.unsplash.com`).
- El carrito se guarda en `localStorage` vía Zustand persist.

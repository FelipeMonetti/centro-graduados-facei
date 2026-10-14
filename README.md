# Centro de Graduados — FACEI · UCALP

Sitio web del Centro de Graduados de la Facultad de Ciencias Exactas e Ingeniería de la Universidad Católica de La Plata.

## Stack

- HTML5
- Tailwind CSS (via CDN)
- JavaScript vanilla
- Google Fonts (DM Sans, DM Serif Display)

## Estructura del proyecto

```
centro-graduados-facei/
├── index.html          # Página principal (one-page con scroll)
├── js/
│   └── main.js         # Lógica: menú mobile, carousel, animaciones
├── css/                # Estilos adicionales (si se necesitan)
├── assets/
│   └── img/            # Imágenes, logos, fotos de graduados
├── .gitignore
└── README.md
```

## Cómo verlo localmente

Abrir `index.html` en el navegador. No requiere build ni servidor de desarrollo.

Para usar un servidor local (opcional, para evitar problemas de CORS con assets):

```bash
# Con Python
python3 -m http.server 8000

# Con Node
npx serve .
```

## Deploy

El sitio se despliega en **Netlify** (capa gratuita). Cada push a `main` dispara un deploy automático.

## Proyecto

Beca Santander 2026 — Desarrollo de sitio web para el Centro de Graduados de la FACEI-UCALP.

- **Autor:** Felipe Monetti
- **Director:** Prof. Lic. Diego Luna
- **Coordinación:** Sol Durán (Extensión FACEI)

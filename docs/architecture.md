# Arquitectura del Proyecto Iteralab Web

## Descripción General

Iteralab Web es un sitio web de marketing para **Iteralab**, una consultora chilena de ingeniería de software. El proyecto está diseñado como una plataforma digital moderna que presenta los servicios de la empresa, permite a los clientes potenciales agendar consultas y facilita el contacto directo vía WhatsApp.

El sitio está orientado al mercado chileno (idioma español, moneda CLP) y se enfoca en empresas que buscan transformación digital, automatización con IA, integración de sistemas y modernización de infraestructura tecnológica.

---

## Stack Tecnológico

### Framework Principal
- **Next.js 16.1.1**: Framework de React para producción con App Router
- **React 19.2.3**: Biblioteca de UI
- **TypeScript 5**: Tipado estático para JavaScript

### Estilos y Animaciones
- **Tailwind CSS 4**: Framework de utilidades CSS
- **Framer Motion 12**: Animaciones y transiciones fluidas
- **clsx + tailwind-merge**: Utilidades para manejo condicional de clases CSS

### Componentes Externos
- **@calcom/embed-react 1.5.3**: Widget embebido de Cal.com para agendamiento de citas
- **lucide-react 0.562.0**: Biblioteca de iconos
- **next-themes 0.4.6**: Manejo de temas claro/oscuro

### Configuración del Proyecto
- **PostCSS**: Procesamiento de CSS
- **ESLint 9**: Linting de código
- **Path Alias**: `@/*` mapea a `./src/*`

---

## Estructura de Directorios

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx          # Layout raíz con metadatos SEO
│   ├── page.tsx            # Página principal (Home)
│   ├── globals.css         # Estilos globales y sistema de diseño
│   ├── agendar/            # Página de agendamiento de consultas
│   ├── servicios/          # Páginas individuales de cada servicio
│   │   ├── consultoria/
│   │   ├── ia/
│   │   ├── integraciones/
│   │   ├── modernizacion-web/
│   │   └── software-a-medida/
│   ├── robots.ts           # Configuración SEO para robots
│   ├── sitemap.ts          # Sitemap automático
│   └── opengraph-image.tsx # Generación dinámica de imágenes OG
├── components/
│   ├── marketing/          # Componentes de secciones de página
│   ├── ui/                 # Componentes reutilizables
│   └── booking/            # Sistema de agendamiento
└── lib/
    ├── constants.ts        # Configuración del sitio y datos
    └── utils.ts            # Funciones utilitarias
```

---

## Sistema de Diseño

### Paleta de Colores
- **Tema Claro**: Fondo blanco (#ffffff), texto zinc-900
- **Tema Oscuro**: Fondo zinc-950 (#09090b), texto zinc-100
- **Color Primario**: Indigo (500-600) para acentos y CTAs
- **Color Secundario**: Zinc para elementos neutros
- **Éxito**: Emerald/Green para WhatsApp y confirmaciones
- **Alerta**: Red para advertencias

### Tipografía
- **Display/Encabezados**: Space Grotesk (Google Fonts)
- **Cuerpo de texto**: Inter (Google Fonts)
- **Renderizado**: Antialiased con font-display swap para mejor rendimiento

### Efectos Visuales
- **Glassmorphism**: Clase `.glass` para efecto de vidrio esmerilado con backdrop-blur
- **Gradientes radiales**: Efectos de spotlight y orbes decorativos
- **Animaciones**: Transiciones suaves con Framer Motion (fadeInUp, hover effects)
- **Scrollbar personalizado**: Estilos adaptados para modo claro y oscuro

---

## Páginas y Rutas

### Página Principal (`/`)
Página de aterrizaje que presenta la propuesta de valor general de Iteralab como consultora de ingeniería de software.

**Secciones incluidas**:
1. **Hero Corporativo**: Encabezado principal con título animado, subtítulo, botones de acción (Explorar Soluciones, Agendar Consultoría) e indicadores de confianza (Código Auditable, Infraestructura Escalable, Soporte Chile)
2. **Grid de Servicios**: Tarjetas interactivas que enlazan a las 5 áreas de servicio
3. **Stack Tecnológico**: Logos de tecnologías utilizadas (Next.js, React, TypeScript, Vercel)
4. **Footer**: Enlaces de navegación, información de la empresa y copyright

### Página de Agendamiento (`/agendar`)
Permite a los visitantes agendar una consultoría estratégica gratuita de 30 minutos.

**Funcionalidades**:
- Widget de Cal.com embebido con vista de mes
- Adaptación automática al tema (claro/oscuro)
- Estado de carga animado mientras se inicializa el calendario
- Indicación de alternativa vía WhatsApp

---

## Páginas de Servicios

Cada servicio tiene su propia página dedicada con estructura similar pero contenido especializado.

### 1. Integraciones y APIs (`/servicios/integraciones`)
**Propósito**: Conectar sistemas empresariales desconectados (ERPs, CRMs, archivos planos).

**Contenido destacado**:
- Problema: Resistencia al cambio, sistemas aislados, procesos manuales
- Solución: Ingeniería de rescate sin tocar sistemas existentes
- Capacidades: ERPs antiguos (Softland, Defontana, SAP), Excels y archivos planos, dashboards en tiempo real
- Oferta especial: "Plan Maestro" - diagnóstico técnico con presupuesto cerrado
- Garantía: Descuento del 100% del costo de diagnóstico si se contrata la implementación

### 2. Software a Medida (`/servicios/software-a-medida`)
**Propósito**: Desarrollo de plataformas internas y portales corporativos personalizados.

### 3. IA y Automatización (`/servicios/ia`)
**Propósito**: Implementación de soluciones de Inteligencia Artificial para automatización empresarial.

**Los 3 Pilares de Automatización**:
1. **Asistentes Comerciales**: Agentes inteligentes 24/7 para WhatsApp que califican leads y agendan reuniones
2. **Procesamiento Documental**: Extracción automática de datos de PDFs y fotos hacia ERPs
3. **Cerebros Corporativos (RAG Empresarial)**: Bases de conocimiento accesibles vía chat

**Diferenciador clave**: IA privada y segura vs ChatGPT genérico - datos permanecen en infraestructura del cliente

**Casos de uso por industria**:
- Inmobiliarias: Agendamiento automático de visitas
- Logística: Lectura automática de guías de despacho
- Legal/Contable: Clasificación y extracción de documentos masivos

**Stack IA utilizado**: OpenAI API (GPT-4), Anthropic Claude, LangChain, Vector DBs (Pinecone, Weaviate, pgvector)

### 4. Consultoría Técnica (`/servicios/consultoria`)
**Propósito**: Auditoría de código, seguridad y servicio de CTO on-demand.

### 5. Modernización Web (`/servicios/modernizacion-web`)
**Propósito**: Sitios de alto rendimiento y optimización SEO técnica.

---

## Componentes de Marketing

### Navbar
Barra de navegación fija con comportamiento responsive.

**Características**:
- Efecto glassmorphism al hacer scroll
- Navegación desktop con enlaces y botón de contacto
- Menú móvil fullscreen con overlay y bloqueo de scroll
- Toggle de tema (claro/oscuro)
- Logo de la marca con enlace al home

### Hero Corporativo
Sección hero de pantalla completa con animaciones escalonadas.

**Elementos**:
- Badge animado con indicador pulsante
- Título con texto destacado en color
- Subtítulo descriptivo
- Botones de acción primario y secundario
- Indicadores de confianza (trust indicators)
- Efectos decorativos: gradientes, spotlight, patrón de grid

### Grid de Servicios
Presentación de los 5 servicios principales en formato bento grid.

**Comportamiento**:
- Tarjetas con hover effects (elevación y escala)
- Iconos específicos por servicio (Plug, Code2, Bot, Shield, Globe)
- Badge "Destacado" para servicio de IA
- Links a páginas individuales de cada servicio
- Animaciones escalonadas al aparecer en viewport

### TechStack
Sección que muestra las tecnologías utilizadas para construir el sitio.

**Tecnologías mostradas**: Next.js, React, TypeScript, Vercel con iconos SVG personalizados.

### Footer
Pie de página con navegación secundaria.

**Estructura**:
- Columna de marca con logo y descripción
- Columna de servicios con enlaces
- Columna de empresa con enlaces institucionales
- Barra inferior con copyright

---

## Componentes de UI Reutilizables

### Button
Botón con sistema de variantes y tamaños.

**Variantes**:
- `primary`: Fondo indigo con sombra
- `secondary`: Fondo zinc con borde
- `ghost`: Transparente con hover

**Tamaños**: `sm`, `md`, `lg`

**Características**: Focus ring, estados disabled, transiciones suaves

### Card
Contenedor con estilos de tarjeta (bordes, sombras, padding).

### Badge
Etiqueta pequeña para destacar texto.

**Variantes**: `default`, `primary`

### AnimatedSection
Wrapper que añade animación de entrada al hacer scroll.

**Funcionalidad**: Detecta cuando el elemento entra en viewport y aplica animación fadeInUp con delay configurable.

### ThemeProvider
Proveedor de contexto para el sistema de temas usando next-themes.

**Configuración**: Atributo `class`, tema por defecto del sistema, sin transiciones de flash.

### ThemeToggle
Botón para alternar entre tema claro y oscuro.

**Iconos**: Sol para modo oscuro, Luna para modo claro.

### WhatsAppFloat
Botón flotante para contacto directo vía WhatsApp.

**Diseño responsive**:
- Móvil: Burbuja circular solo con icono
- Desktop: Botón completo con texto "Hablar con un Ingeniero"

**Comportamiento**: Abre chat de WhatsApp con mensaje predefinido de solicitud de auditoría.

### Logo
Componente del logotipo de Iteralab.

---

## Sistema de Booking

### BookingWidget
Widget embebido de Cal.com para agendamiento de consultas.

**Características**:
- Integración con Cal.com vía @calcom/embed-react
- Vista de calendario mensual
- Adaptación automática al tema del sitio
- Link de calendario: "diogenes-sazo-evvrxf/30min"
- Estado de carga con placeholder animado
- Protección contra errores de hidratación SSR

---

## Configuración y Constantes

### Información del Sitio
- **Nombre**: Iteralab
- **URL**: https://iteralab.cl
- **Descripción**: Ingeniería de Software para Empresas

### Contacto
- **WhatsApp**: 56912345678
- **Mensaje predeterminado**: "Hola Iteralab, quisiera una auditoría."

### Planes de Precios
**Plan Start** - Para Negocios que Inician ($29.990 CLP/mes):
- Landing page high-speed
- Diseño responsive premium
- Hosting incluido
- HTTPS grado bancario
- Soporte por email

**Plan Scale** - Para Empresas en Crecimiento ($59.990 CLP/mes):
- Todo en Plan Start
- Multi-página (hasta 10)
- Blog integrado
- Analítica avanzada
- Soporte prioritario
- Actualizaciones mensuales

### Navegación
**Links principales**: Servicios, Contacto

**Links del footer**:
- Servicios: Integraciones y APIs, Software a Medida, IA y Automatización, Consultoría Técnica, Modernización Web
- Empresa: Sobre Nosotros, Blog, Contacto

---

## Funciones Utilitarias

### cn()
Combina clases CSS condicionalmente usando clsx y fusiona clases de Tailwind con tailwind-merge para evitar conflictos.

### formatCLP()
Formatea números al formato de moneda chilena (peso chileno) sin decimales.

**Ejemplo**: `formatCLP(29990)` → "29.990"

---

## SEO y Metadatos

### Configuración Global
- **Título base**: Iteralab | Ingeniería de Software para Empresas
- **Descripción**: Deuda técnica cero. Modernizamos tu infraestructura web con estándares de Silicon Valley y soporte local en Chile.
- **Idioma**: Español (es)
- **Locale**: es_CL

### Open Graph
- Título, descripción y URL configurados para compartir en redes sociales
- Imagen OG generada dinámicamente vía opengraph-image.tsx

### Twitter Cards
- Tipo: summary_large_image
- Título y descripción personalizados

### Robots
- Indexación permitida (index: true)
- Seguimiento de enlaces permitido (follow: true)

### Datos Estructurados (JSON-LD)
- Tipo: ProfessionalService
- Información de la empresa incluyendo país y región
- Rango de precios: $$

---

## Características Técnicas Destacadas

### Rendimiento
- Carga optimizada de fuentes con font-display swap
- Componentes cliente solo donde es necesario ('use client')
- Scroll behavior smooth nativo

### Accesibilidad
- Etiquetas aria-label en elementos interactivos
- Focus states visibles en botones
- Estructura semántica HTML5

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menú móvil fullscreen
- Componentes adaptativos (WhatsAppFloat, grids)

### Modo Oscuro
- Implementación vía clase CSS
- Transiciones suaves entre temas
- Todos los componentes soportan ambos modos

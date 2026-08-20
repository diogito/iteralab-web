# Optimización AEO — Iteralab Web

## ¿Qué es AEO?

**Answer Engine Optimization** (AEO) es la optimización del sitio para que sus contenidos sean
citados como **respuestas directas** por motores de respuesta y asistentes de IA: Google AI
Overviews, ChatGPT, Perplexity, Gemini, Copilot y Bing Chat.

A diferencia del SEO clásico (posicionar *enlaces* en una lista de resultados), AEO busca que el
motor de respuesta extraiga el contenido de la página y lo responda *en el propio chat*, citando
o no la fuente. Los dos ejes son:

1. **Datos estructurados (JSON-LD)**: les permiten a los motores identificar entidades
   (empresa, servicios, productos, preguntas frecuentes) y relaciones entre ellas.
2. **Contenido en formato de respuesta**: párrafos directos, Q&A, listas y estructura semántica
   (H1 → H2 → H3) que se deja extraer sin ambigüedad.

Todo lo implementado en este repo sigue esos dos ejes.

---

## Qué está implementado

### 1. Datos estructurados (JSON-LD)

Todo el structured data se genera desde **builders tipados** en `src/lib/seo.ts` y se inyecta con
el componente de servidor `src/components/seo/JsonLd.tsx`. Cada nodo referencia a la organización
mediante `@id` (`https://iteralab.cl/#organization`) para que los motores consoliden entidades.

| Página | Schemas inyectados |
| --- | --- |
| `/` (home) | `ItemList` (los 4 agentes), `FAQPage` (con `speakable` sobre `#faq`) |
| `/agentes` | `ItemList` (los 4 agentes) |
| `/agentes/[slug]` | `Service` por agente, `FAQPage` (3 Q&A por agente), `BreadcrumbList` |
| `/servicios/*` (5 páginas) | `Service` por servicio, `BreadcrumbList` |
| Global (layout raíz) | `Organization`, `WebSite`, `ProfessionalService` |

Además:

- **Canonical** declarado en todas las páginas (`alternates.canonical`).
- **Open Graph / Twitter Cards** con imagen OG (`opengraph-image.tsx`), `locale: es_CL`.
- **`speakable`** en el FAQPage del home (`cssSelector: ['#faq']`), soportado por Google para
  lectura en voz alta y asistentes.
- **`sitemap.xml`** y **`robots.txt`** generados dinámicamente con todas las rutas.

### 2. Archivos para crawlers de IA

- **`/llms.txt`** — resumen del sitio en markdown plano (qué hace Iteralab, agentes, servicios,
  páginas clave y contacto). Generado en `src/app/llms.txt/route.ts` desde
  `src/lib/llms.ts`.
- **`/llms-full.txt`** — versión completa con detalle por agente (capacidades, funcionamiento,
  integraciones, deliverables) y el FAQ general. Generado en
  `src/app/llms-full.txt/route.ts`.

Ambos se construyen a partir de las fuentes de verdad (`agents.ts`, `faq.ts`), así que no se
desincronizan del contenido visible.

### 3. Contenido orientado a respuestas

- **FAQ único**: `src/lib/faq.ts` es la única fuente de verdad de las preguntas frecuentes.
  Alimenta a la vez el acordeón visible (`FAQSection.tsx`), el `FAQPage` JSON-LD y `llms.txt`.
  Antes existía duplicación manual entre `page.tsx` y `FAQSection.tsx` (riesgo de drift).
- **FAQ por agente**: cada agente en `src/lib/agents.ts` tiene 3 Q&A propias (campo `faq`),
  emitidas como `FAQPage` en su página de producto. Responde consultas tipo
  "¿qué hace Vera?" directamente en el motor de respuesta.
- **Un solo H1 por página**, estructura de headings semántica y copy que abre con la respuesta
  directa antes de profundizar (patrón "answer-first").

---

## Fuentes de verdad (mantener en sincronía)

| Contenido | Fuente única |
| --- | --- |
| Preguntas frecuentes del sitio | `src/lib/faq.ts` |
| Catálogo de agentes (incl. FAQ por agente) | `src/lib/agents.ts` |
| Identidad, contacto, URL | `src/lib/constants.ts` (`SITE_CONFIG`, `WHATSAPP_NUMBER`) |
| Builders de JSON-LD | `src/lib/seo.ts` |
| `llms.txt` / `llms-full.txt` | `src/lib/llms.ts` |

Regla: **nunca duplicar contenido** — si se agrega un agente, un servicio o una pregunta, se edita
la fuente de verdad y los schemas, sitemap y llms.txt se regeneran solos. La mayoría de los
builders ya consumen `AGENTS` y `FAQ_ITEMS` directamente.

---

## Cómo verificar

### Validación de structured data

1. Correr el sitio localmente (`npm run dev`) o usar la URL de producción.
2. Pegar la URL en el **Rich Results Test** de Google (https://search.google.com/test/rich-results)
   y en el validador de schema.org (https://validator.schema.org).
3. Revisar que en cada página aparezcan los tipos esperados (tabla de la sección anterior)
   sin errores de sintaxis JSON.

### Verificación manual (línea de comandos)

```bash
npm run build && npm run start -- -p 3100
# en otra terminal:
curl -s http://localhost:3100/llms.txt          # resumen para crawlers IA
curl -s http://localhost:3100/llms-full.txt     # versión completa
curl -s http://localhost:3100/sitemap.xml       # sitemap
curl -s http://localhost:3100/agentes/vera | grep -c 'application/ld+json'
```

### Checklist de calidad AEO

- [ ] Cada página tiene un único H1 descriptivo.
- [ ] `title` y `description` únicos por página (sin duplicados).
- [ ] Canonical presente en todas las rutas.
- [ ] FAQPage únicamente con contenido visible en la página (Google lo penaliza si no coincide).
- [ ] Los Q&A responden la pregunta en la primera oración.
- [ ] `llms.txt` y `llms-full.txt` accesibles y actualizados.
- [ ] Sitemap cubre todas las rutas y robots apunta al sitemap.

---

## Próximos pasos sugeridos

- **Blog / guías**: las páginas de contenido largo son donde mejor funciona AEO. Cada artículo
  debería emitir `Article`/`BlogPosting` con `speakable` y secciones H2 en formato pregunta.
- **`sameAs`** en la entidad Organization: cuando existan perfiles reales (LinkedIn, GitHub,
  X/Twitter), agregarlos a `organizationSchema()` en `src/lib/seo.ts`.
- **Verificación en Search Console** y monitorización de impresiones en AI Overviews
  (Search Console > "Descubrimientos" / "Apariencia en la búsqueda").
- **Preguntas por industria**: ampliar el FAQ del home con preguntas por vertical
  (minería, agricultura, logística) siguiendo el patrón de `src/lib/faq.ts`.
- **Páginas de industria dedicadas** (`/industrias/mineria`, etc.) con su propio `Service`
  schema y `ItemList` de casos de uso — hoy las industrias viven como secciones del home.
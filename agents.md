# LABS24K — Guía de Implementación

Guía práctica para trabajar en la maquetación estática de **LABS24K** (división operativa de Grupo Evolvix Global). Tech stack: **HTML5 + CSS plano, sin frameworks**. Nomenclatura **BEM**. Metodología **mobile-first**.

> ⚠️ **Importante:** NO usar Tailwind, CSS-in-JS, ni build tools. Todo en `css/styles.css`. La spec canónica del design system "Sovereign Command" (tokens, tipografía, brand) está en **`design.md`**; este archivo documenta cómo aplicarla al proyecto.

---

## 0. Flujo de trabajo en Git (obligatorio)

- **Nunca subir directo a `main`**. Un hook local (`pre-push`) lo bloquea.
- Flujo: `feature/<descripción>` → `develop` → `main` (vía **Pull Request**).
- Ramas: `main` (producción, solo PRs aprobados), `develop` (integración), `feature/*` (trabajo).
- Pasos:
  1. `git switch -c feature/<descripcion>` desde `develop`.
  2. Commitear y hacer push (`git push -u origin feature/<descripcion>`).
  3. Abrir PR hacia `develop` con `gh pr create` y mergear.
  4. Cuando `develop` esté estable, PR de `develop` → `main`.
- `develop` es la rama por defecto de trabajo local (debe existir en local y remoto).

---

## 1. Archivos del proyecto

```
labs24k/
├── index.html                     # Home
├── ecosistema-de-agentes-ia.html  # Página Agentes IA
├── automatizaciones.html          # Página Automatizaciones
├── noticias.html                  # Página Noticias e Innovación
├── servicios.html                 # Página Servicios (Núcleos Operativos)
├── nosotros.html                  # Página Nosotros
├── contacto.html                  # Página Contacto (formulario)
├── login.html                     # Página Login (pantalla de acceso)
├── design.md                      # Spec canónica del design system "Sovereign Command"
├── .githooks/
│   └── pre-push                   # Bloquea push directo a main (regla local)
├── js/
│   └── main.js                    # JS vanilla: menú móvil (toggle fullscreen)
├── images/
│   ├── logoOficial.svg            # Logo oficial (desde labs24k.com/images/logoOficial.svg)
│   └── sectors/                   # Imágenes de sectores (PNG, desde el sitio real)
└── css/
    └── styles.css                 # Única hoja de estilos (todo el sistema)
```

- **Header y footer son componentes compartidos**: copiar su markup a cada página nueva; solo cambia el link activo (`site-header__link--active` + `aria-current="page"`).
- **Los links del header/footer deben ser relativos** (`index.html`, `ecosistema-de-agentes-ia.html`, `automatizaciones.html`, `servicios.html#business-intelligence`) para que la maquetación navegue al abrirla localmente. Los enlaces sin página creada van a `#`.
- **El menú móvil requiere `<script src="js/main.js" defer></script>` antes de `</body>`** en cada página con header (todas excepto `login.html`). `main.js` alterna la clase `is-open` en `.site-header` + `has-menu-open` en `<body>`; el CSS pinta el panel fullscreen glass (<768px) y lo oculta en desktop.
- **Menú móvil = filas numeradas**: los `site-header__link` del panel llevan contador CSS (`::before` `"0" counter(menu-item)`), full-width con hairline separador y hover con glow cyan. El CTA `[ LOGIN ]` de desktop (`site-header__cta`, fuera del `<nav>`) se oculta en mobile; dentro del `<nav>` va el pie del menú (`.site-header__menu-foot`) con el LOGIN móvil (`.site-header__menu-cta`), el idioma (`.site-header__lang`) y el correo (`.site-header__mail`). El `menu-foot` solo se muestra <768px. El contador se resetea en `.site-header__nav` (mobile) y se desactiva en desktop (`content: none`).
- El CSS se divide en secciones numeradas: 1) tokens, 2) reset, 3) tipografía, 4) layout, 5) efectos, 6) componentes, 7) bloques, 8) accesibilidad.
- **Imágenes de sectores** (`images/sectors/*.png`): son PNG convertidos desde el sitio real (originalmente JPEG); úsalos localmente, no apuntes a URLs del sitio real para recursos internos.
- **Tratamiento de tarjetas "tech"**: todas las cards (`agent-card`, `sector-card`, `department-card`, `news-card`, `case-card`, `stat`, `feature-card`, `module`, `service-card`, `step`, `use-case`, `clone__card`, `metric-card`) comparten gradiente de fondo sutil + glow radial cyan en esquina (`::before`) + hover `translateY(-4px)` con glow. Mantener este patrón en tarjetas nuevas.

---

## 2. Tokens (en `:root`)

### Colores

| Token                        | Valor                                   |
| ---------------------------- | --------------------------------------- |
| `--deep-void`                | `#000000` (fondo principal)             |
| `--neon-cyan`                | `#00E5FF` (acciones primarias, acentos) |
| `--tech-blue`                | `#0057FF` (jerarquía secundaria, hover) |
| `--system-green`             | `#39FF14` (solo status "active")        |
| `--surface`                  | `#131313`                               |
| `--surface-container-lowest` | `#0e0e0e`                               |
| `--surface-container-low`    | `#1c1b1b`                               |
| `--surface-container`        | `#201f1f`                               |
| `--surface-glass`            | `rgba(255,255,255,0.03)`                |
| `--on-surface`               | `#e5e2e1`                               |
| `--on-surface-variant`       | `#bac9cc`                               |
| `--outline`                  | `#849396`                               |
| `--outline-variant`          | `#3b494c`                               |

Reglas de uso:

- **Neon Cyan**: CTAs primarios, estados activos, métricas clave.
- **Tech Blue**: bordes ghost, iconos de sector, acentos secundarios.
- **System Green**: SOLO indicadores de estado/status en vivo.

### Tipografía

| Clase          | Familia        | Tamaño                            | Peso | Uso                     |
| -------------- | -------------- | --------------------------------- | ---- | ----------------------- |
| `.headline-xl` | Montserrat     | 64px → `clamp(2.5rem,5vw,4rem)`   | 800  | H1 (uppercase)          |
| `.headline-lg` | Montserrat     | 40px → `clamp(2rem,3.2vw,2.5rem)` | 700  | H2 (uppercase)          |
| `.body-lg`     | Inter          | 18px                              | 400  | párrafos hero           |
| `.body-md`     | Inter          | 16px                              | 400  | cuerpo general          |
| `.label-mono`  | JetBrains Mono | 12px, `ls:0.1em`                  | 500  | labels de sistema       |
| `.cta-label`   | Montserrat     | 14px, `ls:0.05em`                 | 600  | botones, títulos cortos |

Regla: **H1 y H2 siempre en uppercase**. Los "system labels" usan mono (`[ SYS: ACTIVE ]`, `SECTOR.01`, etc.).

### Spacing (base 8px)

- `--space-1`: 0.5rem · `--space-2`: 1rem · `--space-container`: 2rem
- `--space-gutter`: 1.5rem · `--space-grid-margin`: 4rem · `--space-section`: 8rem
- Breakpoints: mobile <768px (márgenes 20px), tablet 768–1024px (40px), desktop >1024px (80px). Contenedor máx. `1440px`.

### Radios y efectos

- Base: `--radius-sm:0.125rem`, `md:0.25rem`, `lg:0.5rem`, `xl:0.75rem`.
- **Botones primarios: radio 0 (sharp)**.
- Glassmorphism: `background: var(--surface-glass)` + `backdrop-filter: blur(20px)`.
- Hairline: `1px solid rgba(0,229,255,0.2)`.
- Glow: `box-shadow: 0 0 20px rgba(0,229,255,0.4)`.

---

## 3. Componentes reutilizables

### Botones

```html
<a class="btn btn--primary cta-label">Acción</a>
<!-- fondo cyan, texto negro, glow -->
<a class="btn btn--ghost cta-label">[ LINK ]</a>
<!-- borde cyan, texto cyan -->
<a class="btn btn--ghost-blue cta-label">[ LOGIN ]</a>
<!-- borde tech-blue -->
<a class="btn btn--small">..</a>
<!-- compacto mono, header CTA -->
```

### Chips / Tags / Badges

- `.chip` — rectángulo mono con borde `--outline-variant` (para tags de sectores).
- `.use-case__tag--active` / `.feature-card__badge` — fondo `rgba(0,229,255,0.1)`, texto cyan.
- `.site-footer__badge--accent` — borde cyan + fondo 5%.

### Status

```html
<span class="status-dot"></span>
<!-- dot cyan pulsante -->
<span class="status-dot status-dot--green"></span>
<!-- dot verde: solo "active" -->
```

Animación `.pulse` (2s) y `.scanning-line` (barra láser 4s) ya definidas. Respeta `prefers-reduced-motion`.

### Inputs

- Fondo inset `#050505`, borde 1px `--tech-blue`, glow neon cyan en focus, placeholder en mono.
- Implementados en `.auth-card__input` (login).

### Utilidades

- `.container` (max-width 1440px + padding responsivo), `.section` (padding-block 8rem).
- `.glass-panel` (glass + hairline), `.neon-glow` (text-shadow cyan), `.btn-glow`.
- Colores: `.text-accent` (cyan), `.text-dim`, `.text-outline`, `.text-tech-blue`.

---

## 4. Bloques BEM existentes

| Bloque                      | Descripción                                                                  | Modificadores clave                                                                                                                                                       |
| --------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `site-header`               | Barra fija glass. Contiene `__brand`, `__nav`, `__link`, `__cta`, `__toggle`, `__menu-foot`, `__menu-cta`, `__lang`, `__mail` | `site-header__link--active`, `site-header.is-open` (estado menú móvil) |
| `hero`                      | Sección 90vh, fondo + overlay + grid 12-col                                  | `hero__text--lead`, `hero__kicker`                                                                                                                                        |
| `metric-card`               | Panel de datos del hero (agentes IA)                                         | —                                                                                                                                                                         |
| `metrics` / `metric`        | Barra de métricas en vivo (home)                                             | `metric__value--plain`, `metric__icon--dim`                                                                                                                               |
| `trust`                     | Barra de logos corporativos (grayscale → color en hover)                     | —                                                                                                                                                                         |
| `clone`                     | Bento grid "Tu Clon Digital"                                                 | `clone__card`, `clone__side-card`, `clone__video`                                                                                                                         |
| `sector-card`               | Tarjetas de sectores                                                         | `sectors__featured` (tarjeta destacada con imagen + métrica)                                                                                                              |
| `somos`                     | Sección "Somos Labs 24K" (Home) con 4 stats                                  | `somos__kicker`, `somos__text`, `stats__grid--four`                                                                                                                       |
| `features` / `feature-card` | Bento grid de features                                                       | `--wide` (span 8), `--half` (span 4), `--solid`, `--accent`, `features__lead`                                                                                             |
| `use-cases` / `use-case`    | Tarjetas de vectores de operación                                            | `use-case--neutral`                                                                                                                                                       |
| `automation`                | Hero de catálogo con anillos giratorios                                      | `automation__ring--inner`, `automation__badge`                                                                                                                            |
| `module`                    | Tarjetas de automatizaciones (bento)                                         | `--wide` (span 2), `--blue`, `--op`, `--green`, `--error`                                                                                                                 |
| `scanline`                  | Línea láser decorativa global (fixed)                                        | —                                                                                                                                                                         |
| `news-hero`                 | Hero centrado de noticias                                                    | `news-hero__badge`, `news-hero__kicker`                                                                                                                                   |
| `news-card`                 | Tarjeta de artículo con imagen, meta y autor                                 | `--wide` (span 2), `--feature` (destacado grid 2-col), `__media`, `__image`, `__meta`, `__byline`, `__flag`                                                               |
| `news-filter`               | Chips de filtro por categoría                                                | `news-filter__chip--active`                                                                                                                                               |
| `trends`                    | Sidebar "Hot Now" (sticky)                                                   | `trends__item`, `trends__sector`, `trends__rank`                                                                                                                          |
| `vip`                       | Caja de suscripción "IA VIP"                                                 | `vip__title`, `vip__text`, `vip__btn`                                                                                                                                     |
| `roi`                       | Barra de métricas ROI solapada al hero (`-3rem`)                             | `roi__value--green/cyan/plain`, `roi__metric--bordered`                                                                                                                   |
| `service-card`              | Tarjetas de servicios (bento 12-col)                                         | `--full` (span 12), `--half` (span 6), `--dim`, `--void`, `__hover`, `__glow`, `__link`                                                                                   |
| `service-detail`            | Sección de detalle de un servicio (contenido real)                           | `__header`, `__kicker`, `__title`, `__text`, `__actions`, `__subtitle`, `__grid`, `__media`, `__image`, `__status`                                                        |
| `status-card`               | Ficha de estado (Encryption / Network Isolation)                             | `status-card__label`, `status-card__value`                                                                                                                                |
| `about`                     | Hero Nosotros (grid 12-col: 7 + 5)                                           | `about__badge`, `about__visual`, `about__caption`, `about__title--sentence`                                                                                               |
| `page-section`              | Sub-sección genérica (header kicker + título + lead)                         | `page-section__header`, `page-section__kicker`, `page-section__title`, `page-section__lead`                                                                               |
| `case-card`                 | Tarjeta de caso de éxito (badge + título + métrica + texto)                  | `case-grid`, `case-card__badge`, `case-card__metric`                                                                                                                      |
| `stat`                      | Tarjetas de métricas/validación                                              | `stat__value`, `stat__icon`                                                                                                                                               |
| `contact-hero`              | Hero de contacto (landing minimalista)                                       | `contact-hero__badge`, `contact-hero__title--sentence`, `contact-hero__cta`                                                                                               |
| `contact-form`              | Formulario de contacto (grid 2-col, canal directo)                           | `__header`, `__body`, `__grid`, `__field`, `__field--full`, `__label`, `__control`, `__icon`, `__input`, `__input--select`, `__input--textarea`, `__footer`, `__submit`, `__note` |
| `auth`                      | Pantalla Login (flex centrado full-screen, sin header/footer)                | `auth__grid` (patrón de rejilla)                                                                                                                                          |
| `auth-card`                 | Panel glass de acceso                                                        | `__logo`, `__title`, `__subtitle--sentence`, `__form`, `__control`, `__input`, `__remember`, `__submit`, `__notice--plain`, `__footer`, `__prompt`, `__request`, `__lang` |
| `catalog`                   | Catálogo de agentes (Ecosistema)                                             | `catalog__group`, `catalog__group-head`, `catalog__grid`                                                                                                                  |
| `agent-card`                | Tarjeta de agente del catálogo                                               | `__tag`, `__title`, `__text`, `__link`                                                                                                                                    |
| `consult`                   | CTA "Consultoría Gratuita"                                                   | `consult__perks`, `consult__perk`                                                                                                                                         |
| `pain`                      | Sección "¿Tu empresa está atascada?" (Automatizaciones)                      | `pain__quote`, `pain__grid`                                                                                                                                               |
| `department-card`           | Ficha de departamento (Problema/Automatización/Resultado)                    | `__head`, `__row`, `__row-label`, `__row-text`                                                                                                                            |
| `process` / `step`          | Proceso de 5 pasos numerados                                                 | `step__num`, `step__title`, `step__text`                                                                                                                                  |
| `sector-detail`             | Ficha de sector con imagen + 4 bloques                                       | `__media`, `__image`, `__row`, `__row-label`                                                                                                                              |
| `premium`                   | Sección premium + chips                                                      | `premium__chips`                                                                                                                                                          |
| `site-footer`               | Footer 4 columnas + bottom bar                                               | `site-footer__col--system`, `__desc`, `__contact`, `__social`, `__bottom`, `__legal`, `__lang`                                                                            |
| `body.has-menu-open`        | Estado global: bloquea scroll cuando el menú móvil está abierto              | `overflow: hidden` (mobile)                                                                                                                                               |

---

## 5. Grid (desktop)

- **12 columnas** con span 8/4 (bento) o 4/8 según bloque.
- Implementado con CSS Grid: `.features__grid`, `.clone__grid` = `repeat(12, 1fr)`; `.use-cases__grid`, `.sectors__grid` = `repeat(3, 1fr)`.
- El fondo del body lleva grid overlay 24px al 3% de opacidad.

---

## 6. Buenas prácticas obligatorias

1. **Solo HTML + CSS plano** en `css/styles.css` — nunca Tailwind ni `<style>` inline.
2. **BEM estricto**: `bloque__elemento--modificador`. Un bloque por sección.
3. **No repetir CSS**: si un estilo ya existe como componente (`.btn`, `.chip`, `.glass-panel`), reutilizarlo.
4. **Mobile-first**: escribir estilos base para mobile y usar `@media (min-width: ...)` para tablet/desktop.
5. **Accesibilidad**: HTML semántico, un solo `<h1>`, `aria-label` en navegación/íconos, `aria-current` en link activo, `alt` en imágenes, `prefers-reduced-motion`.
6. **Verificación**: al terminar, comprobar que toda clase usada en HTML tenga su regla en CSS y que las llaves estén balanceadas.
7. **Tipografía**: H1/H2 uppercase; labels de sistema en mono.
8. **Consulte `design.md`** para la spec canónica del design system; este documento es la guía de aplicación al proyecto.

---

## 7. Tonos de voz y contenido

- Marca: **LABS24K**, división de **Grupo Evolvix Global**, "IA Soberana".
- Estilo textual: autoritario, técnico, "command center" (`SYS.PERFORMANCE`, `SOVEREIGN_MODE: ON`).

# Design System — Default

> Fonte de verdade para tokens e padrões visuais do projeto.
> Gerado a partir do CSS base. Preencha os campos [FILL] no setup de cada projeto.

---

## Identidade visual do projeto

- **Fonte principal:** [FILL — e.g. Poppins | Inter | Nunito]
- **Cor primária:** [FILL — e.g. #f97316]
- **Cor secundária:** [FILL — e.g. #16a34a]
- **Estilo geral:** [FILL — ex: institucional sóbrio | moderno vibrante | editorial minimalista]

---

## 1. Tokens de cor

```css
/* Marca */
--c-primary:         [FILL];   /* cor principal — botões, destaques, ícones */
--c-primary-hover:   [FILL];   /* primary escurecida ~10% */
--c-secondary:       [FILL];   /* cor de apoio — badges, listas, links */
--c-secondary-hover: [FILL];   /* secondary escurecida ~10% */

/* Texto */
--c-text:            #111827;  /* corpo principal */
--c-muted:           #6b7280;  /* texto secundário, parágrafos */

/* Fundo */
--c-bg:              #ffffff;  /* fundo padrão */
--c-bg-alt:          #f5f5f5;  /* seções alternadas */
--c-dark:            #0f172a;  /* seções escuras, hero overlay, footer */

/* Interface */
--c-border:          #e5e7eb;  /* bordas de inputs, divisores */
```

**Regra:** nunca use hex diretamente no CSS do projeto. Sempre `var(--c-*)`.

---

## 2. Tipografia

```css
/* Família */
--ff-base: "[FILL]", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;

/* Escala */
--fs-xs:   0.75rem;    /*  12px — tags, badges, labels */
--fs-sm:   0.875rem;   /*  14px — legendas, botões, nav */
--fs-md:   1rem;       /*  16px — corpo base */
--fs-lg:   1.25rem;    /*  20px — subtítulos, intro */
--fs-xl:   2rem;       /*  32px — h2 padrão */
--fs-hero: 2.25rem;    /*  36px — h1 mobile (escala com clamp em desktop) */

/* Peso */
--fw-regular:  400;
--fw-medium:   500;
--fw-semibold: 600;
--fw-bold:     700;

/* Linha */
--lh-base:  1.6;   /* corpo */
--lh-tight: 1.2;   /* headings */
```

**Hierarquia de headings:**
- `h1` → `var(--fs-hero)` → escala para `3rem` em desktop via media query
- `h2` → `var(--fs-xl)` → escala para `2.25rem` / `2.5rem` em tablet/desktop
- `h3` → `var(--fs-lg)`

**Google Fonts — carregamento:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=[FILL]:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 3. Espaçamento

```css
--space-1:  8px;
--space-2:  16px;
--space-3:  24px;
--space-4:  40px;
--space-5:  64px;
--space-6:  96px;
```

**Uso padrão:**
- Padding de seção: `var(--space-5) 0` (mobile) → mantém em desktop
- Gap de grid: `var(--space-3)`
- Padding de card: `var(--space-3)` ou `var(--space-4)`
- Padding de container: `0 var(--space-2)` (mobile) → `0 var(--space-4)` (768px+)

**Regra:** nunca use valores arbitrários (ex: `margin: 37px`). Use sempre a escala.

---

## 4. Layout

```css
--container: 1200px;   /* max-width padrão */
```

**Container padrão:**
```css
.secao__container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--space-2);
}

@media (min-width: 768px) {
  .secao__container {
    padding: 0 var(--space-4);
  }
}
```

**Grid padrão:**
```css
/* 2 colunas */
@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
}

/* 3 colunas */
@media (min-width: 768px) {
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}

/* 4 colunas */
@media (min-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
}
```

---

## 5. Bordas e sombras

```css
/* Raio */
--radius-sm:  6px;    /* botões, inputs, tags */
--radius-md:  10px;   /* cards */
--radius-lg:  16px;   /* imagens, seções destacadas */

/* Sombra */
--shadow-sm:  0 2px 8px rgba(0,0,0,0.06);    /* cards em repouso */
--shadow-md:  0 8px 24px rgba(0,0,0,0.10);   /* cards em hover */

/* Transição */
--transition: 0.25s ease;
```

---

## 6. Breakpoints

| Nome | Valor | Uso |
|------|-------|-----|
| Mobile | < 480px | base (mobile-first) |
| Small | 480px | ajustes pontuais |
| Tablet | 768px | grid 2 colunas, nav desktop |
| Laptop | 1024px | grid 3–4 colunas, ajuste de tipografia |
| Desktop | 1280px+ | refinamentos opcionais |

---

## 7. Componentes base

### Botões

```css
/* Primário */
.btn-primary {
  background: var(--c-primary);
  color: #fff;
  border: 2px solid var(--c-primary);
  padding: 12px 24px;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  border-radius: var(--radius-sm);
  transition: background var(--transition), border-color var(--transition);
}
.btn-primary:hover {
  background: var(--c-primary-hover);
  border-color: var(--c-primary-hover);
}

/* Secundário (outline) */
.btn-secondary {
  background: transparent;
  color: var(--c-secondary);
  border: 2px solid var(--c-secondary);
}
.btn-secondary:hover {
  background: var(--c-secondary);
  color: #fff;
}

/* Outline branco — uso em fundos escuros */
.btn-outline-white {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.70);
}
.btn-outline-white:hover {
  background: rgba(255,255,255,0.12);
  border-color: #fff;
}
```

### Card padrão

```css
.card {
  background: #fff;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--space-3);
  transition: box-shadow var(--transition), transform var(--transition);
}
.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### Seção padrão

```css
/* Fundo claro */
.secao { padding: var(--space-5) 0; background: var(--c-bg); }

/* Fundo alternado */
.secao-alt { padding: var(--space-5) 0; background: var(--c-bg-alt); }

/* Fundo escuro */
.secao-dark { padding: var(--space-5) 0; background: var(--c-dark); color: #fff; }
```

### Input / Textarea

```css
.input, .textarea {
  width: 100%;
  padding: 12px var(--space-2);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
  font-family: var(--ff-base);
  font-size: var(--fs-sm);
  color: var(--c-text);
  background: #fff;
  transition: border-color var(--transition);
}
.input:focus, .textarea:focus {
  outline: none;
  border-color: var(--c-primary);
}
```

---

## 8. Ícones

Biblioteca: **Lucide Icons** via CDN.

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

Uso:
```html
<i data-lucide="check"></i>
<i data-lucide="arrow-right"></i>
<i data-lucide="instagram"></i>
```

Inicialização (antes de `</body>`):
```html
<script>lucide.createIcons();</script>
```

**Tamanhos padrão:**
- Ícones de UI (listas, features): `20px × 20px`
- Ícones de seção/card: `28px × 32px`
- Ícones de botão: `16px × 18px`
- Ícones do footer/social: `18px × 18px`

---

## 9. Acessibilidade

```css
/* Focus visível — WCAG AA */
:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 3px;
}
```

**Contraste mínimo:**
- Texto body sobre fundo branco: ≥ 4.5:1
- Texto grande (18px+ bold) sobre fundo: ≥ 3:1
- Nunca usar `--c-muted` (`#6b7280`) sobre `--c-bg-alt` sem verificar contraste

---

## 10. Performance

- Imagens com `width` e `height` sempre definidos (previne CLS)
- `loading="lazy"` em todas as imagens abaixo do fold
- Hero image sem `loading="lazy"`
- CSS linkado no `<head>`, JS com `defer`
- Google Fonts com `display=swap`
- Sem frameworks CSS externos

---

## 11. Nomenclatura de classes (BEM)

```
.bloco {}
.bloco__elemento {}
.bloco--modificador {}
```

**Exemplos do projeto:**
```
.hero__title
.header__nav-link
.footer__social-link
.programas__card-title
.contato__form-group
```

---

## 12. Paleta de cores do projeto atual

> Substitua nos campos [FILL] acima ao iniciar projeto novo.

| Token | Valor | Uso |
|-------|-------|-----|
| `--c-primary` | `#f97316` | laranja — botões, ícones, destaques |
| `--c-primary-hover` | `#ea580c` | laranja escuro — hover |
| `--c-secondary` | `#16a34a` | verde — CTAs secundários, badges |
| `--c-secondary-hover` | `#15803d` | verde escuro — hover |
| `--c-text` | `#111827` | quase preto — headings, corpo |
| `--c-muted` | `#6b7280` | cinza médio — parágrafos |
| `--c-bg` | `#ffffff` | branco — fundo padrão |
| `--c-bg-alt` | `#f5f5f5` | cinza claro — seções alternadas |
| `--c-dark` | `#0f172a` | azul noturno — seções escuras |
| `--c-border` | `#e5e7eb` | cinza suave — bordas |

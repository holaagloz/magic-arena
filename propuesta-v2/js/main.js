/* MagicArena · Propuesta v2 · Studio Gloz */
(() => {
  'use strict';

  // 1. Ayudantes, banderas y tokens de movimiento
  const d = document, html = d.documentElement;
  const $ = (s, c = d) => c.querySelector(s);
  const $$ = (s, c = d) => [...c.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  const safe = (fn) => { try { return fn(); } catch (e) { console.warn('[magicarena]', e); } };
  const M = { ease: 'power3.out', easeIO: 'power3.inOut', pop: 'back.out(2.2)', dur: 1.0, stagger: 0.085, dist: 56, lerp: 0.1 };

  if (!hasGSAP) html.classList.remove('js');
  else {
    gsap.registerPlugin(ScrollTrigger);
    if (window.SplitText) gsap.registerPlugin(SplitText);
    ScrollTrigger.config({ ignoreMobileResize: true });
  }

  // 2. Lenis con un solo reloj
  let lenis = null;
  if (hasGSAP && !RM && window.Lenis && M.lerp) {
    lenis = new Lenis({ lerp: M.lerp, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // 3. Lo que funciona siempre
  // Horario con la hora de Costa Rica (lunes cerrado)
  safe(() => {
    const H = { 0: [10, 19], 1: null, 2: [13, 19], 3: [13, 19], 4: [13, 19], 5: [10, 19], 6: [10, 19] }; // lunes por confirmar
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: 'America/Costa_Rica', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' })
      .formatToParts(new Date()).map((x) => [x.type, x.value]));
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday);
    const now = +p.hour + +p.minute / 60;
    const f = (h) => `${h > 12 ? h - 12 : h}:00 ${h >= 12 ? 'p. m.' : 'a. m.'}`;
    const art = (h) => (h === 13 || h === 1 ? 'la' : 'las');
    const dias = ['el domingo', 'el lunes', 'el martes', 'el miércoles', 'el jueves', 'el viernes', 'el sábado'];
    const el = $('[data-estado]');
    const hoy = H[day];
    if (day === 1) { el.textContent = 'Martes a domingo · lunes por confirmar'; }
    else if (hoy && now >= hoy[0] && now < hoy[1]) {
      el.textContent = `Abierto hoy hasta ${art(hoy[1])} ${f(hoy[1])}`;
    } else {
      el.parentElement.classList.add('cerrado');
      if (hoy && now < hoy[0]) el.textContent = `Abrimos hoy a ${art(hoy[0])} ${f(hoy[0])}`;
      else {
        let n = (day + 1) % 7; while (!H[n]) n = (n + 1) % 7;
        el.textContent = `Abrimos ${n === (day + 1) % 7 ? 'mañana' : dias[n]} a ${art(H[n][0])} ${f(H[n][0])}`;
      }
    }
    $$('.horario tr').forEach((tr) => { if (tr.dataset.dias.split(',').map(Number).includes(day)) tr.classList.add('hoy'); });
  });

  // Enlaces internos suaves
  const irA = (el) => { if (lenis) lenis.scrollTo(el, { offset: -10, duration: 1.4 }); else el.scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); };
  d.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const el = id && d.getElementById(id);
    if (!el) return;
    e.preventDefault();
    cerrarMenu();
    irA(el);
    history.replaceState(null, '', `#${id}`);
  });

  // Menú del celular
  const boton = $('.nav__menu'), panel = $('#panel');
  let menuTl = null;
  function abrirMenu() {
    boton.setAttribute('aria-expanded', 'true'); boton.setAttribute('aria-label', 'Cerrar menú');
    panel.classList.add('abierto'); panel.setAttribute('aria-hidden', 'false');
    if (lenis) lenis.stop();
    if (hasGSAP && !RM) {
      const bandas = $$('.banda', panel);
      bandas.forEach((p) => { const L = p.getTotalLength(); gsap.set(p, { strokeDasharray: L, strokeDashoffset: L }); });
      menuTl = gsap.timeline()
        .fromTo(panel, { clipPath: 'circle(0% at 100% 0%)' }, { clipPath: 'circle(150% at 100% 0%)', duration: 0.7, ease: M.easeIO })
        .to(bandas, { strokeDashoffset: 0, duration: 0.8, stagger: 0.08, ease: 'power2.inOut' }, 0.2)
        .fromTo($$('li, .btn', panel), { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.05, ease: M.ease }, 0.25);
    }
    const primero = $('a', panel); if (primero) primero.focus({ preventScroll: true });
  }
  function cerrarMenu() {
    if (!panel.classList.contains('abierto')) return;
    boton.setAttribute('aria-expanded', 'false'); boton.setAttribute('aria-label', 'Abrir menú');
    panel.setAttribute('aria-hidden', 'true');
    if (lenis) lenis.start();
    if (hasGSAP && !RM) gsap.to(panel, { clipPath: 'circle(0% at 100% 0%)', duration: 0.5, ease: M.easeIO, onComplete: () => panel.classList.remove('abierto') });
    else panel.classList.remove('abierto');
  }
  if (boton && panel) {
    boton.addEventListener('click', () => (boton.getAttribute('aria-expanded') === 'true' ? cerrarMenu() : abrirMenu()));
    d.addEventListener('keydown', (e) => { if (e.key === 'Escape') { cerrarMenu(); boton.focus(); } });
  }

  // Barra fija: aparece al pasar la portada y se esconde en la sección final
  safe(() => {
    const barra = $('[data-barra]'), portada = $('[data-portada]'), cierre = $('#visitanos');
    if (!barra || !('IntersectionObserver' in window)) return;
    const estado = { portada: true, cierre: false };
    const pintar = () => barra.classList.toggle('oculta', estado.portada || estado.cierre);
    pintar();
    new IntersectionObserver(([e]) => { estado.portada = e.isIntersecting; pintar(); }, { threshold: 0.15 }).observe(portada);
    new IntersectionObserver(([e]) => { estado.cierre = e.isIntersecting; pintar(); }).observe(cierre);
  });

  // Camino de la banda coral hasta el botón principal
  const trazarCamino = () => {
    const svg = $('.camino'), hasta = $('[data-camino-hasta]');
    const lado = $('[data-desde-lado]'), arriba = $('[data-desde-arriba]');
    if (!svg || !hasta || !lado || !arriba) return null;
    const h = svg.getBoundingClientRect(), b = hasta.getBoundingClientRect();
    const debajo = arriba.getBoundingClientRect().top > b.bottom;
    const a = (debajo ? arriba : lado).getBoundingClientRect();
    const x1 = a.left - h.left, y1 = a.top - h.top;
    let dpath;
    if (debajo) {
      const x2 = b.left + b.width * 0.5 - h.left, y2 = b.bottom - h.top, ym = (y1 + y2) / 2;
      dpath = `M${x1},${y1} C${x1},${ym} ${x2},${ym} ${x2},${y2}`;
    } else {
      const x2 = b.right - h.left, y2 = b.top + b.height * 0.5 - h.top;
      dpath = `M${x1},${y1} C${x1 - 90},${y1} ${x2 + 120},${y2} ${x2},${y2}`;
    }
    svg.setAttribute('viewBox', `0 0 ${h.width} ${h.height}`);
    const path = $('path', svg);
    path.setAttribute('d', dpath);
    return path;
  };
  safe(trazarCamino);
  let ancho = innerWidth, rT;
  addEventListener('resize', () => {
    if (innerWidth === ancho) return;
    ancho = innerWidth; clearTimeout(rT);
    rT = setTimeout(() => safe(() => { const p = trazarCamino(); if (p && hasGSAP) gsap.set(p, { strokeDasharray: 'none', strokeDashoffset: 0 }); }), 200);
  });

  if (!hasGSAP) return;
  if (RM) return; // con menos movimiento: todo visible y quieto

  // 5. Estados iniciales
  const preparar = (els) => els.forEach((p) => { const L = p.getTotalLength(); gsap.set(p, { strokeDasharray: L, strokeDashoffset: L }); });
  gsap.set('[data-reveal]', { y: M.dist * 0.6, opacity: 0 });
  gsap.set('[data-rise]', { y: M.dist * 1.6, rotate: (i) => (i % 2 ? 2.5 : -2.5), opacity: 0 });
  gsap.set('[data-vista]', { y: M.dist * 1.4, opacity: 0 });

  // 6. Efectos de scroll
  // Revelados en cascada
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%', once: true,
    onEnter: (b) => gsap.to(b, { y: 0, opacity: 1, duration: M.dur, ease: M.ease, stagger: M.stagger, overwrite: true }),
  });
  // Fichas y tarjetas: suben con un giro leve y se asientan
  ScrollTrigger.batch('[data-rise]', {
    start: 'top 92%', once: true,
    onEnter: (b) => gsap.to(b, { y: 0, rotate: 0, opacity: 1, duration: M.dur * 1.1, ease: M.pop, stagger: 0.12, overwrite: true }),
  });
  // Ventanas en arco: la foto sube desde abajo
  $$('[data-ventana]').forEach((v) => {
    const img = $('img', v);
    const tl = gsap.timeline({ scrollTrigger: { trigger: v, start: 'top 88%', once: true } })
      .fromTo(v, { clipPath: 'inset(100% 0% 0% 0% round 0px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: M.dur * 1.1, ease: M.easeIO });
    if (img) tl.fromTo(img, { scale: 1.2 }, { scale: 1, duration: M.dur * 1.5, ease: M.ease }, 0);
  });
  // Trazos que se dibujan (una vez o con el scroll)
  $$('[data-draw]').forEach((svg) => {
    const lines = $$('path, circle', svg).filter((p) => p.getAttribute('fill') === 'none' || !p.getAttribute('fill'));
    preparar(lines);
    const scrub = svg.hasAttribute('data-draw-scrub');
    gsap.to(lines, {
      strokeDashoffset: 0, duration: M.dur * 1.4, stagger: M.stagger, ease: scrub ? 'none' : M.ease,
      scrollTrigger: scrub ? { trigger: svg, start: 'top 85%', end: 'bottom 55%', scrub: true } : { trigger: svg, start: 'top 85%', once: true },
    });
  });
  // El apilable de arcos: cada pieza cae en su lugar
  $$('[data-pila] > *').forEach((p, i) => gsap.set(p, { y: -60 - i * 20, opacity: 0 }));
  ScrollTrigger.create({ trigger: '[data-pila]', start: 'top 85%', once: true,
    onEnter: () => gsap.to('[data-pila] > *', { y: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: 'bounce.out' }) });
  // El pastel: los pisos se apilan, las velas aparecen y las llamas brotan
  safe(() => {
    const pastel = $('[data-pastel]');
    if (!pastel) return;
    gsap.set($$('[data-piso]', pastel), { y: 40, opacity: 0, transformOrigin: '50% 100%' });
    gsap.set($$('[data-vela]', pastel), { y: 30, opacity: 0 });
    gsap.set($$('.llama', pastel), { scale: 0, transformOrigin: '50% 100%' });
    gsap.set($$('[data-burbuja]', pastel), { scale: 0, transformOrigin: '50% 50%' });
    gsap.timeline({ scrollTrigger: { trigger: pastel, start: 'top 80%', once: true } })
      .to($$('[data-piso]', pastel).reverse(), { y: 0, opacity: 1, duration: 0.8, stagger: 0.09, ease: M.pop })
      .to($$('[data-vela]', pastel), { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: M.pop }, '-=0.3')
      .to($$('.llama', pastel), { scale: 1, duration: 0.7, stagger: 0.1, ease: 'elastic.out(1,.5)' }, '-=0.2')
      .to($$('[data-burbuja]', pastel), { scale: 1, duration: 0.6, stagger: 0.1, ease: M.pop }, '-=0.5')
      .add(() => gsap.to($$('.llama', pastel), { scaleY: 1.12, duration: 0.6, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.2 }));
  });
  // Cierre: el arcoíris vuelve a dibujarse (la firma rima) y brotan las hojas
  safe(() => {
    const c = $('[data-cierre]');
    const bandas = $$('.banda', c), hojas = $$('.hoja', c);
    preparar(bandas);
    gsap.set(hojas, { scale: 0, transformOrigin: '50% 100%' });
    gsap.timeline({ scrollTrigger: { trigger: c, start: 'top 90%', once: true } })
      .to(bandas, { strokeDashoffset: 0, duration: 1.1, stagger: 0.12, ease: 'power2.inOut' })
      .to(hojas, { scale: 1, duration: 0.8, stagger: 0.1, ease: M.pop }, '-=0.4');
  });

  // Títulos por líneas desde la ranura
  const splitReveals = () => safe(() => {
    if (!window.SplitText) return;
    $$('[data-split]').forEach((el) => {
      const mode = el.dataset.split === 'words' ? 'words' : 'lines';
      SplitText.create(el, {
        type: mode, mask: mode, linesClass: 'linea', wordsClass: 'palabra', autoSplit: true,
        onSplit: (self) => gsap.from(self[mode], {
          yPercent: 130, duration: M.dur, stagger: M.stagger * (mode === 'words' ? 1.4 : 1), ease: mode === 'words' ? M.pop : M.ease,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }),
      });
    });
  });

  // 7. La firma de la portada
  function firmaPortada() {
    const P = $('[data-portada]');
    const camino = trazarCamino();
    const bandas = $$('.arte__svg .banda', P);
    preparar(bandas); if (camino) preparar([camino]);
    gsap.set('.linea__in', { yPercent: 130, y: 0 });
    const tl = gsap.timeline({ defaults: { ease: M.ease } })
      .to(bandas, { strokeDashoffset: 0, duration: 1.15, stagger: 0.13, ease: 'power2.inOut' }, 0.05)
      .to('.linea__in', { yPercent: 0, duration: M.dur * 1.15, stagger: M.stagger * 1.4 }, 0.15)
      .fromTo('[data-in]:not(.btn):not(.estado)', { autoAlpha: 0, y: M.dist * 0.6 }, { autoAlpha: 1, y: 0, duration: M.dur, stagger: M.stagger }, 0.2)
      .fromTo('.portada .btn[data-in], .portada .estado[data-in]', { autoAlpha: 1, y: M.dist * 0.5 }, { autoAlpha: 1, y: 0, duration: M.dur, stagger: M.stagger }, 0)
      .fromTo('[data-foto]', { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: M.dur * 0.8, ease: M.easeIO }, 0)
      .fromTo('[data-foto] img', { scale: 1.18 }, { scale: 1, duration: M.dur * 1.4 }, 0)
      .to('[data-vista]', { y: 0, opacity: 1, duration: M.dur, stagger: 0.12, ease: M.pop }, 1.05)
      .fromTo('[data-insert]', { scale: 0, rotate: -20 }, { scale: 1, rotate: 0, duration: M.dur * 0.9, ease: M.pop }, 1.0)
      .fromTo('.portada .hojas .hoja', { scale: 0, transformOrigin: '50% 100%' }, { scale: 1, duration: M.dur * 0.8, stagger: 0.09, ease: M.pop }, 1.1)
      .fromTo('.portada .anillos .anillo', { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.6, stagger: 0.08, ease: M.pop }, 1.25)
      .fromTo('[data-sello]', { scale: 0, rotate: -90 }, { scale: 1, rotate: 0, duration: M.dur, ease: M.pop }, 1.2);
    if (camino) tl.to(camino, { strokeDashoffset: 0, duration: M.dur * 1.1, ease: 'power2.inOut' }, 1.35)
      .fromTo('[data-camino-hasta]', { scale: 1 }, { scale: 1.07, duration: 0.18, yoyo: true, repeat: 1, ease: 'power2.out' }, 2.35);
    tl.add(() => $$('.portada .hojas .hoja').forEach((h) => h.classList.add('flota')));
    return tl;
  }

  // La portada no divide texto: arranca ya, así título, botón y foto llegan juntos.
  // Los títulos de sección sí esperan las fuentes, porque el corte de líneas depende de ellas.
  safe(firmaPortada);
  Promise.race([d.fonts ? d.fonts.ready : Promise.resolve(), new Promise((r) => setTimeout(r, 1200))])
    .then(() => { splitReveals(); ScrollTrigger.refresh(); });
})();

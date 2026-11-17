(() => {
    const slides = ['01', '02', '03', '04', '05', '06'];
    const dialog = document.getElementById('pf-lightbox');
    if (!dialog) return;
    const img = dialog.querySelector('.pf-lb-stage img');
    const title = dialog.querySelector('.pf-lb-top h3');
    const kind = dialog.querySelector('.pf-lb-top span');
    const dots = dialog.querySelector('.pf-lb-dots');
    let slug = '', index = 0;
    const src = n => `/assets/portfolio/${slug}-${slides[n]}.webp`;
    function show(n) {
        index = (n + slides.length) % slides.length;
        img.src = src(index);
        dots.querySelectorAll('button').forEach((b, i) => b.setAttribute('aria-current', i === index));
    }
    function open(trigger) {
        slug = trigger.dataset.project;
        title.textContent = trigger.dataset.title;
        kind.textContent = trigger.dataset.kind || trigger.closest('.pf-case')?.querySelector('.pf-kind')?.textContent || '';
        dots.innerHTML = slides.map((s, i) => `<button type="button" aria-label="${i + 1}"><img src="/assets/portfolio/${slug}-${s}.webp" alt="" loading="lazy"></button>`).join('');
        dots.querySelectorAll('button').forEach((b, i) => b.addEventListener('click', () => show(i)));
        show(Number(trigger.dataset.start || 0));
        dialog.showModal();
        document.documentElement.classList.add('inquiry-open');
    }
    document.querySelectorAll('[data-project]').forEach(t => t.addEventListener('click', () => open(t)));
    dialog.querySelector('.pf-lb-close').addEventListener('click', () => dialog.close());
    dialog.querySelector('[data-dir="-1"]').addEventListener('click', () => show(index - 1));
    dialog.querySelector('[data-dir="1"]').addEventListener('click', () => show(index + 1));
    dialog.addEventListener('close', () => document.documentElement.classList.remove('inquiry-open'));
    dialog.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') show(index - 1); if (e.key === 'ArrowRight') show(index + 1); });
    dialog.addEventListener('click', e => { if (e.target === dialog || e.target.classList.contains('pf-lb-stage')) dialog.close(); });
    let x0 = null;
    img.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, {passive: true});
    img.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1)); x0 = null; });

    // Filters (variant B)
    document.querySelectorAll('.pf-filters button').forEach(btn => btn.addEventListener('click', () => {
        document.querySelectorAll('.pf-filters button').forEach(b => b.setAttribute('aria-pressed', b === btn));
        const f = btn.dataset.filter;
        document.querySelectorAll('.pf-tile').forEach(t => t.classList.toggle('is-hidden', f !== 'all' && !t.dataset.type.includes(f)));
    }));

    // Carousel (variant C)
    const rail = document.querySelector('.pf-rail');
    if (rail) {
        const bar = document.querySelector('.pf-progress i');
        const step = () => rail.querySelector('.pf-slide').offsetWidth + 26;
        document.querySelectorAll('.pf-arrows button').forEach(b => b.addEventListener('click', () => rail.scrollBy({left: step() * Number(b.dataset.dir), behavior: 'smooth'})));
        const n = rail.querySelectorAll('.pf-slide').length;
        bar.style.width = `${100 / n}%`;
        rail.addEventListener('scroll', () => {
            const p = rail.scrollLeft / Math.max(1, rail.scrollWidth - rail.clientWidth);
            bar.style.transform = `translateX(${p * (n - 1) * 100}%)`;
        }, {passive: true});
    }
})();

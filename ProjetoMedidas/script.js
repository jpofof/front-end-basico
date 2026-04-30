    // NAVEGAÇÃO
    const TOTAL = 11;
    let cur = 0;
    const btns = document.querySelectorAll('.nav-btn');
    const mobBtns = document.querySelectorAll('.mob-nav-btn');

    function go(n) {
      document.getElementById('s' + cur).classList.remove('active');
      btns[cur].classList.remove('active');
      mobBtns[cur].classList.remove('active');
      cur = n;
      document.getElementById('s' + cur).classList.add('active');
      btns[cur].classList.add('active');
      mobBtns[cur].classList.add('active');
      document.getElementById('counter').textContent = (n + 1) + ' / ' + TOTAL;
      document.getElementById('mob-slide-info').textContent = (n + 1) + ' / ' + TOTAL;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function goMob(n) {
      go(n);
      closeDrawer();
    }

    let drawerOpen = false;
    function toggleDrawer() {
      drawerOpen = !drawerOpen;
      document.getElementById('mob-drawer').classList.toggle('open', drawerOpen);
    }
    function closeDrawer() {
      drawerOpen = false;
      document.getElementById('mob-drawer').classList.remove('open');
    }

    // SLIDE 3: em vs rem
    let rootV = 16, paiV = 20, multV = 1.5;
    function setRoot(v) { rootV = +v; document.getElementById('rv').textContent = v; refreshEm(); }
    function setPai(v) { paiV = +v; document.getElementById('pv').textContent = v; refreshEm(); }
    function setMult(v) { multV = +v; document.getElementById('mv').textContent = v; refreshEm(); }
    function refreshEm() {
      const em = paiV * multV, re = rootV * multV;
      document.getElementById('d-em').style.fontSize = em + 'px';
      document.getElementById('d-rem').style.fontSize = re + 'px';
      document.getElementById('i-em').textContent = multV + 'em × ' + paiV + 'px (pai) = ' + em.toFixed(1) + 'px';
      document.getElementById('i-rem').textContent = multV + 'rem × ' + rootV + 'px (root) = ' + re.toFixed(1) + 'px';
    }
    refreshEm();

    // SLIDE 4: porcentagem
    let paiWV = 600, filhoPctV = 60;
    function setPaiW(v) { paiWV = +v; document.getElementById('pai-size').textContent = v; document.getElementById('pai-box').style.width = Math.min(v, 780) + 'px'; updateFilho(); }
    function setFilhoPct(v) { filhoPctV = +v; document.getElementById('filho-pct').textContent = v; updateFilho(); }
    function updateFilho() {
      const px = Math.round(paiWV * filhoPctV / 100);
      document.getElementById('filho-box').style.width = filhoPctV + '%';
      document.getElementById('filho-box').textContent = filhoPctV + '% = ' + px + 'px';
      document.getElementById('px-result').textContent = px;
    }

    // SLIDE 5: vw/vh
    function setVW(v) {
      v = +v;
      document.getElementById('vw-pct').textContent = v;
      document.getElementById('vw-bar').style.width = v + '%';
      const px = Math.round(800 * v / 100);
      document.getElementById('vw-label').textContent = v + 'vw = ' + px + 'px';
    }
    function setVH(v) {
      v = +v;
      document.getElementById('vh-pct').textContent = v;
      const px = Math.round(600 * v / 100);
      const h = Math.max(30, Math.min(v * 1.8, 200));
      document.getElementById('vh-bar').style.height = h + 'px';
      document.getElementById('vh-label').textContent = v + 'vh = ' + px + 'px';
    }

    // SLIDE 6: ch
    function setCH(v) { document.getElementById('ch-val').textContent = v; document.getElementById('ch-box').style.maxWidth = v + 'ch'; }
    function setCHFS(v) { document.getElementById('ch-fs').textContent = v; document.getElementById('ch-box').style.fontSize = v + 'px'; }

    // SLIDE 7: clamp
    function setClamp(v) {
      v = +v;
      document.getElementById('clamp-vp').textContent = v;
      const r1 = v * 0.04, c1 = Math.min(48, Math.max(28, r1));
      document.getElementById('clamp-box').style.fontSize = c1 + 'px';
      let i1;
      if (r1 < 28) i1 = '4vw de ' + v + 'px = ' + r1.toFixed(1) + 'px → abaixo do mínimo, usa 28px';
      else if (r1 > 48) i1 = '4vw de ' + v + 'px = ' + r1.toFixed(1) + 'px → acima do máximo, usa 48px';
      else i1 = '4vw de ' + v + 'px = ' + r1.toFixed(1) + 'px → valor fluido dentro do intervalo';
      document.getElementById('clamp-info').textContent = i1;

      const r2 = v * 0.025, c2 = Math.min(19, Math.max(14, r2));
      document.getElementById('clamp-p').style.fontSize = c2 + 'px';
      let i2;
      if (r2 < 14) i2 = '2.5vw = ' + r2.toFixed(1) + 'px → mínimo de 14px';
      else if (r2 > 19) i2 = '2.5vw = ' + r2.toFixed(1) + 'px → máximo de 19px';
      else i2 = '2.5vw = ' + r2.toFixed(1) + 'px → valor fluido';
      document.getElementById('clamp-p-info').textContent = i2;
    }
    setClamp(800);

    // SLIDE 8: calculadora
    function calcConvert() {
      const root = +document.getElementById('calc-root').value || 16;
      const px = +document.getElementById('calc-px').value || 0;
      const rem = (px / root);
      const str = parseFloat(rem.toFixed(4)) + 'rem';
      document.getElementById('calc-result').textContent = str;
    }
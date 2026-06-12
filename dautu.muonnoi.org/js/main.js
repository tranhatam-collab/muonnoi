// === DAUTU.MUONNOI.ORG — Shared JS ===
// No public investment logic. Legal-safe only.

(function () {
  // Mobile nav
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    });
  }

  // Highlight active nav
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path) a.classList.add('active');
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Form: lane acknowledgement toggle
  const laneSelect = document.getElementById('lane_requested');
  const strategicAck = document.getElementById('strategic-ack-group');
  if (laneSelect && strategicAck) {
    const check = () => {
      const val = laneSelect.value;
      if (val && val.includes('strategic')) {
        strategicAck.style.display = 'block';
        strategicAck.querySelector('input').setAttribute('required', 'required');
      } else {
        strategicAck.style.display = 'none';
        strategicAck.querySelector('input').removeAttribute('required');
        strategicAck.querySelector('input').checked = false;
      }
    };
    laneSelect.addEventListener('change', check);
    check();
  }

  // Form validation helper
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      let ok = true;
      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value || (field.type === 'checkbox' && !field.checked)) {
          ok = false;
          field.style.borderColor = 'var(--danger)';
        } else {
          field.style.borderColor = '';
        }
      });
      if (!ok) {
        e.preventDefault();
        alert('Vui lòng điền đầy đủ các trường bắt buộc.');
      } else {
        // Mock submission
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (btn) { btn.textContent = 'Đã gửi · Đang xử lý'; btn.disabled = true; }
        setTimeout(() => {
          alert('Cảm ơn bạn đã gửi quan tâm. Team phụ trách sẽ phản hồi trong thời gian sớm nhất.');
          form.reset();
          if (strategicAck) strategicAck.style.display = 'none';
          if (btn) { btn.textContent = 'Gửi Quan Tâm Đồng Hành'; btn.disabled = false; }
        }, 800);
      }
    });
  });
})();

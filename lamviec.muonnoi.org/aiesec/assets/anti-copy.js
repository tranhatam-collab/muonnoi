/**
 * Anti-copy protection for AIESEC proposal documents
 * Prevents: copy, cut, paste, right-click, text selection, drag, print, save, DevTools
 */
(function(){
  'use strict';

  // Block right-click context menu
  document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    return false;
  }, true);

  // Block copy/cut/paste
  document.addEventListener('copy', function(e){
    e.preventDefault();
    e.clipboardData && e.clipboardData.setData('text/plain', 'Tài liệu chỉ được xem, không cho sao chép.');
    return false;
  }, true);

  document.addEventListener('cut', function(e){
    e.preventDefault();
    return false;
  }, true);

  document.addEventListener('paste', function(e){
    e.preventDefault();
    return false;
  }, true);

  // Block text selection
  document.addEventListener('selectstart', function(e){
    e.preventDefault();
    return false;
  }, true);

  // Block drag
  document.addEventListener('dragstart', function(e){
    e.preventDefault();
    return false;
  }, true);

  document.addEventListener('drop', function(e){
    e.preventDefault();
    return false;
  }, true);

  // Block common DevTools shortcuts
  document.addEventListener('keydown', function(e){
    // F12
    if(e.key === 'F12'){ e.preventDefault(); return false; }
    // Ctrl+Shift+I/J/C/K/U
    if(e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'K')){
      e.preventDefault(); return false;
    }
    // Ctrl+S (save)
    if(e.ctrlKey && e.key === 's'){
      e.preventDefault(); return false;
    }
    // Ctrl+P (print)
    if(e.ctrlKey && e.key === 'p'){
      e.preventDefault(); return false;
    }
    // Ctrl+U (view source)
    if(e.ctrlKey && e.key === 'u'){
      e.preventDefault(); return false;
    }
    // Ctrl+A (select all)
    if(e.ctrlKey && e.key === 'a'){
      e.preventDefault(); return false;
    }
  }, true);

  // Block print via CSS injection (backup)
  var style = document.createElement('style');
  style.textContent = '@media print{*{display:none !important}}';
  document.head.appendChild(style);

  // Block developer tools detection loop
  var devtoolsOpen = false;
  var threshold = 160;
  setInterval(function(){
    var widthThreshold = window.outerWidth - window.innerWidth > threshold;
    var heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if(widthThreshold || heightThreshold){
      if(!devtoolsOpen){
        devtoolsOpen = true;
        document.body.innerHTML = '<div style="position:fixed;inset:0;background:#0b1020;color:#7dd3fc;display:flex;align-items:center;justify-content:center;font-size:24px;font-family:sans-serif;text-align:center;padding:40px;"><div>Truy cập bị từ chối.<br>DevTools không được phép trên trang này.</div></div>';
      }
    } else {
      devtoolsOpen = false;
    }
  }, 1000);

  // Block save-as / Ctrl+Shift+S
  document.addEventListener('keydown', function(e){
    if(e.ctrlKey && e.shiftKey && e.key === 'S'){
      e.preventDefault(); return false;
    }
  }, true);

  // Disable image drag
  document.querySelectorAll('img').forEach(function(img){
    img.setAttribute('draggable', 'false');
    img.style.pointerEvents = 'none';
  });

  // Add watermark overlay
  var wm = document.createElement('div');
  wm.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.02;background-image:repeating-linear-gradient(-45deg,transparent,transparent 30px,rgba(125,211,252,.1) 30px,rgba(125,211,252,.1) 60px);';
  document.body.appendChild(wm);

})();

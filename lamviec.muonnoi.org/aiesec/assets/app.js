(function(){
  const ACCESS_KEY = "AIESEC_THAILAM_2026"; // Key truy cập — đổi theo yêu cầu Founder.
  const ADMIN_EMAIL = "tranhatam@gmail.com";
  const STORAGE_KEY = "aiesec_lamviec_access_v1";
  const SUBMIT_ENDPOINT = ""; // Optional: /api/aiesec-access để lưu lead thật.
  function qs(s){return document.querySelector(s)}
  function hasAccess(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}").ok===true}catch(e){return false}}
  function openGate(){const gate=qs('#accessGate'); if(gate && !hasAccess()) gate.classList.add('active')}
  function unlock(payload){localStorage.setItem(STORAGE_KEY,JSON.stringify({ok:true,at:new Date().toISOString(),payload})); const gate=qs('#accessGate'); if(gate) gate.classList.remove('active')}
  async function submitLead(payload){
    if(!SUBMIT_ENDPOINT) return;
    try{await fetch(SUBMIT_ENDPOINT,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)})}catch(e){console.warn('Lead submit failed',e)}
  }
  function isAdmin(email){return String(email).trim().toLowerCase()===ADMIN_EMAIL}
  window.addEventListener('DOMContentLoaded',()=>{
    openGate();
    const form=qs('#accessForm'); if(!form) return;
    form.addEventListener('submit',async(e)=>{
      e.preventDefault();
      const data=Object.fromEntries(new FormData(form).entries());
      const email=String(data.email||'').trim().toLowerCase();
      const err=qs('#gateError');
      const admin=isAdmin(email);
      // Admin bypass: chỉ cần key + email
      if(admin){
        if(!String(data.accessKey||'').trim()){if(err){err.textContent='Vui lòng nhập Access key.';err.style.display='block'};return}
        if(String(data.accessKey).trim()!==ACCESS_KEY){if(err){err.textContent='Key chưa đúng. Vui lòng kiểm tra lại.';err.style.display='block'};return}
        const payload={email:data.email,role:'admin',source:location.pathname,at:new Date().toISOString()};
        await submitLead(payload); unlock(payload);
        return;
      }
      // Người thường: cần đầy đủ key, họ tên, sđt, email, địa chỉ
      const required=['accessKey','fullName','phone','email','address'];
      const missing=required.filter(k=>!String(data[k]||'').trim());
      if(missing.length){if(err){err.textContent='Vui lòng nhập đầy đủ Key, họ tên, số điện thoại, email và địa chỉ.';err.style.display='block'};return}
      if(String(data.accessKey).trim()!==ACCESS_KEY){if(err){err.textContent='Key chưa đúng. Vui lòng kiểm tra lại.';err.style.display='block'};return}
      const payload={fullName:data.fullName,phone:data.phone,email:data.email,address:data.address,organization:data.organization||'',source:location.pathname,at:new Date().toISOString()};
      await submitLead(payload); unlock(payload);
    })
  })
})();

(()=>{"use strict";const t=document.querySelector(".nav-list"),e=document.querySelector(".nav-button");e.addEventListener("click",(()=>{"false"===t.getAttribute("data-visible")?(t.setAttribute("data-visible",!0),e.setAttribute("aria-expanded",!0)):(t.setAttribute("data-visible",!1),e.setAttribute("aria-expanded",!1))}));let n=2;setInterval((()=>{6==n&&(document.getElementById("auto-5").style.backgroundColor="transparent",n=1),document.getElementById("rad-"+n).checked=!0,document.getElementById("auto-"+n).style.backgroundColor="hsl(120 100% 50%)",2==n?document.getElementById("auto-1").style.backgroundColor="transparent":3==n?document.getElementById("auto-2").style.backgroundColor="transparent":4==n?document.getElementById("auto-3").style.backgroundColor="transparent":5==n&&(document.getElementById("auto-4").style.backgroundColor="transparent"),n++}),5e3)})();
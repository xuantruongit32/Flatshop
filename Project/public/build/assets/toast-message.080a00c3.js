import{S as i}from"./sweetalert2.all.015ec384.js";import"./_commonjsHelpers.4e997714.js";$(document).ready(function(){n=n(),f(n)});function n(){return i.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",i.stopTimer),e.addEventListener("mouseleave",i.resumeTimer)}})}function a(e,o,s){let t,r;o=="success"?(t="rgba(40,167,69,.85)",r="success"):o=="error"&&(t="rgba(220,53,69,.85)",r="error"),e.fire({icon:r,title:s,background:t,color:"#fff"})}function f(e){var t,r;let o=(t=$("#toast__js").attr("type"))!=null?t:"",s=(r=$("#toast__js").attr("message"))!=null?r:"";s!=""&&a(e,o,s)}

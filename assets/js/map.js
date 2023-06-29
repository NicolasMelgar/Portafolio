document.addEventListener("DOMContentLoaded", (event) => {
    
    setTimeout(( ) => { 
    document.querySelector("#carga-iframe-mapa").innerHTML = `
    
    <iframe class="contacto__iframe"  frameborder="0" scrolling="no" marginheight="0" margiwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5933.204562532829!2d-71.53691259148061!3d-41.96587701973546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961bbe292d49ca89%3A0xa4fcd4026336e0f6!2zRWwgQm9sc8OzbiwgUsOtbyBOZWdybw!5e0!3m2!1ses-419!2sar!4v1687446240928!5m2!1ses-419!2sar"></iframe>
    
    `;  
},5000)
});
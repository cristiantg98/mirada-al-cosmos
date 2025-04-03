document.getElementById("form-consulta").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const motivo = document.getElementById("motivo").value;
    const mensaje = document.getElementById("mensaje").value.trim();
    const confirmacion = document.getElementById("confirmacion");
  
    if (nombre && correo && motivo && mensaje) {
      confirmacion.style.display = "block";
      this.reset();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
  
  function cambiarFondo() {
    document.querySelector(".contacto-section").style.backgroundColor = "#9FA8DA";
  }
  
  function toggleMenu() {
    const links = document.querySelector('.navbar-links');
    links.classList.toggle('active');
  } 
  
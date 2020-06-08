function pollo() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    if (nombre=="") {
        alert("COMPLETE EL CAMPO NOMBRE POR FAVOR");
        
    }else{
        if (apellido=="") {
            alert("COMPLETE EL CAMPO APELLIDO POR FAVOR");    
        }else{
            if (telefono=="") {
                alert("COMPLETE EL CAMPO TELEFONO POR FAVOR");
            }else{
                if (email=="") {
                    alert("COMPLETE EL CAMPO EMAIL POR FAVOR");
                    
                }
            }
            
        }
    }
    
}
 
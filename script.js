const visibilityBtn = document.getElementById("visibilityBtn");
visibilityBtn.addEventListener("click", toggleVisibility)

function toggleVisibility(){
    const passwordInput = document.getElementById("password");
    if(passwordInput.type === "password"){
        passwordInput.type = "text"
        visibilityBtn.classList.remove('fa-eye')
        visibilityBtn.classList.add('fa-eye-slash')

    }
    else{
      passwordInput.type = "password" 
        visibilityBtn.classList.remove('fa-eye-slash')
        visibilityBtn.classList.add('fa-eye')
    }

}
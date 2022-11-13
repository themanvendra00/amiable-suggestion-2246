document.querySelector("form").addEventListener("submit", loginDetails);
let loginArr = JSON.parse(localStorage.getItem("details")) || [];

function loginDetails(event){
    event.preventDefault();
    let loginMail = document.querySelector("Login_email").value;
    let loginPassword = document.querySelector("#Login_pass").value;
    let loginObj ={
        loginMail,
        loginPassword,
    };
    loginArr.push(loginObj);
    localStorage.setItem("details"); let json = JSON.parse(localStorage.getItem("details"));
    for(i=0;i<json.length;i++){
        if(json[i]["signupMail"==loginMail]){
            if(json[i]["signupPassword"]==loginPassword){
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });
                Toast.fire({
                    icon: "success",
                    title: "Login successful",
                  });
                  setTimeout(function () {
                    window.location.href = "index.html";
                  }, 2500);
                  break;
                } else {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener("mouseenter", Swal.stopTimer);
                      toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                  });
                  Toast.fire({
                    icon: "error",
                    title: "Wrong password",
                  });
                  break;
                }
              } else {
                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                  },
                });
                Toast.fire({
                  icon: "error",
                  title: "Wrong email"+"\n"+"create an account first!",
                });
                break;
              }
            }
          }
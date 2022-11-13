document.querySelector("form").addEventListener("submit",signupDetails);
let signupArr = JSON.parse(localStorage.getItem("details")) || [];

function signupDetails(event){
    event.preventDefault();
    let signupMail = document.querySelector("#signupMail").value;
    let signupPassword = document.querySelector("#signupPassword").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;
    let signupObj = {
        signupMail,
        signupPassword,
        confirmPassword,
    };
    let mydetails = JSON.parse(localStorage.getItem("details")) || [];
    if(mydetails.length =! 0){
        for(i=0;i<mydetails.length;i++){
            if(mydetails[i]["signupMail"]!=signupMail){
                if(signupMail.length!=0){
                    if(signupPassword>=8){
                        if(confirmPassword==signupPassword){
                        signupArr.push(signupObj);
                        localStorage.setItem("details", JSON.stringify(signupArr));
                        window.location.href ="\login Page\index.html"
                        }else{
                            // alert("Check Your Password");
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
                                icon: "warning",
                                title: "Check Your Password",
                              });
                            }
                          }else {
                            // alert("Password should contain altesat 8 characters");
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
                              icon: "warning",
                              title: "Password should contain altesat 8 characters",
                            });
                          }
                        }else {
                            // alert("Fill all details");
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
                              icon: "question",
                              title: "Fill all details",
                            });
                          }
                        }else {
                            // alert("Email already registered");
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
                              title: "Email already registered",
                            });
                          }
                        }
            } else {
            if (signupMail.length != 0) {
                if (signupMail.length >= 8) {
                signupArr.push(signupObj);
                localStorage.setItem("details", JSON.stringify(signupArr));
                // alert("Account created")
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
                    title: "Account created",
                });
                // window.location.href = "signin.html";
                setTimeout(function () {
                window.location.href = "\login Page\index.html";
                }, 2500);
                }else {
                // alert("Password should contain altesat 8 characters");
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
                    icon: "warning",
                    title: "Password should contain altesat 8 characters",
                });
                }
            } else {
                // alert("Fill all details");
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
                icon: "question",
                title: "Fill all details",
            });
        }
    }
}
        
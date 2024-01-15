/*
        // adding style from Js

        let root = document.getElementById('root');
        const title = "local storage session";

        root.textContent = title;
        root.style.backgroundColor = '#e06a6a';
        root.style.color = 'white';
        root.style.fontSize = '2em';
        root.style.textAlign = 'center';
        */

        let username = document.getElementById('username-input');
        let password = document.getElementById('password-input');
        let btnLogin = document.getElementById('btnlogin');
        let btnLogout = document.getElementById('btnlogout')

        

        const admin = document.getElementById('admin');
        const user = document.getElementById('user-biasa');

        btnLogout.style.display = "none"
        admin.style.display = "none"
        user.style.display = "none"
        
       
        console.log(localStorage.getItem('username'))
     

        function onLogin(){
            localStorage.setItem('username', username.value);
            // btnLogout.style.display = "block"  
            // location.reload() 
            
            if(username.value == '' && password.value == '' || password.value==''){
                alert('masukkan username dan password')
            }else if(username.value == 'admin' && password.value == 'admin'){
                localStorage.setItem('role', 'admin');
                admin.style.display = "block"
                user.style.display = "none"
                }else{
                    localStorage.setItem('role', 'basic');
                    user.style.display = "block"
                    admin.style.display = "none"
                }
            }
        
        if(localStorage.getItem('username')){
           username.style.display = "none"
           password.style.display = "none"
           btnLogin.style.display = "none"
           btnLogout.style.display = "block"
           if(localStorage.getItem('role') == 'admin'){
            admin.style.display = "block"
            user.style.display = "none"
           }else{
            user.style.display = "block"
            admin.style.display = "none"
           }
        }

        function onLogout(){
            localStorage.clear();
            location.reload()   
        }
            
            
        





        
        
        

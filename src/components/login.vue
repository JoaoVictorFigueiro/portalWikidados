<template>
   <div class="loginContainer">
        <div class="loginTela">
            <div class="containerDaIMG">
                <img src="https://app.wikidados.com.br/statics/img/logo/logo_horizontal.png" alt="" class="img-fluid">
            </div>
            <form @submit.prevent="logar()" class="loginTelaInfo text-center">
                <div class="email">
                    <label> 
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>                            
                          E-mail:
                        </span> 
                        <input required type="email" name="" class="" v-model="usuario">
                    </label>
                </div>
                <div class="senha">
                    <label>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg> 
                            Senha:
                        </span> 
                        <input required type="password" name="" id="" v-model="senha">
                    </label>
                </div>
                <div class="loginTelaInfoLogar">
                    <input class="btn btn-success" type="submit" value="Logar">
                </div>
                <div class="loginTelaInfoEsqueciSenha">
                    <a href="">Esqueci minha senha</a>
                </div>
                <div class="loginTelaInfoRegistrar">
                    <a href="">Registrar-se</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import router from '@/router/router'

export default {
  name: 'login',

  data() {
    return {
      usuario: 'marcelo.oliveira@wikidados.com.br',
      senha: 'ildsyrk1',
    }
  },

  methods: {
    async userProfile() {
        await this.axios.post('http://localhost:8080/portal/index.php?api=FetchProfile&module=Portal')
        .then(profile => {
            localStorage.setItem('profile', JSON.stringify(profile.data.result))
        })
    },  

    async logar() {
      let dadosDeLogin = 
      {
      "q":
        {
          "username":this.usuario,
          "password":this.senha,
          "language":"en_us"
        },
        "module":"Portal",
        "api":"Login"
      }
      await this.axios.post('http://localhost:8080/portal/index.php', dadosDeLogin)
      .then(response => {
        this.userProfile()
        router.push({path:'/'})
      })
    }
  },

  props: {
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
:root {
    --cabecalho: #004346;
    --fundo: #172a3a;
    --letras: #09bc8a;
    --bordas: #74b3ce;
    --opacidade: 0
}

body, html {
    width: 100%;
    height: 100%;
}

.loginContainer {
    z-index: 999;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url('https://www.wikidados.com.br/assets/wiki/img/produtos/home/fundo_1.jpg');
}

.loginTela {
    margin: auto;
    position: relative;
    color: white;
    height: 50%;
    min-height: 430px;
    max-width: 455px ;
    min-width: 300px;
    border-radius: 10px;
    background-color: #050F1A;
    box-shadow: 0px 0px 15px 2px #19e984;
    background-image: url('https://i.gifer.com/3WyW.gif');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-clip: border-box;
    background-position: 0 50;
    transform: translateY(50%);
}


.loginTela input {
    width: 100%;
    position: relative;
    border-radius: 5px;
    background-color: rgb(255, 255, 255, 90%);
    border: solid 2px var(--cabecalho);
}

.loginTela input:focus {
  outline: none;
}

.loginTela span {
    display: block;
}

.loginTelaInfo {
    position: relative;
    border-radius: 0px 0px 10px 10px;
    padding: 15px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    transform: translateY(40%);
}

.loginTelaInfo label {
    width: 60%;
    min-width: fit-content;
    font-weight: bold;
    min-height: fit-content;
}

.loginTelaInfoRegistrar {
    padding-top: 20px;
    transform: scale(103%);
}

i {
    top: 0;
    left: 0;
    transform: translateY(25%);
}

.loginTelaInfo input {
    margin-top: 5px;
}

.loginTelaInfo a {
    color: #19e984;
    font-weight: bold;
    text-decoration: none;
}

.loginTelaInfo a:hover {
    color: #19e984;
}

.email span, .senha span {
    text-align: left;
}

.email, .senha {
    /* height: fit-content; */
    margin: 15px;
    position: relative;
}

.containerDaIMG {
    text-align: center;
    background-color: white;
    padding: 20px;
    z-index: 1;
    position: absolute;
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.loginTelaInfoLogar {
    width: 100%;
    position: relative;
    margin-bottom: 10px;
}

.loginTelaInfoLogar input {
    width: 40%;
    background-color: #102f50; 
    font-weight: bold;
    border: 0px;

}

.loginTelaInfoLogar button:hover {
    background-color: #20e686;
    transition: all 0.3s ease;
}

</style>

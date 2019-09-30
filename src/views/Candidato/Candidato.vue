<template>
  <div class="candidato-form">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h2>Candidatar-se à uma Vaga 🖋 🗒</h2>
      </vs-col>
    </vs-row>

    <form>
      <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.nome" color="#b39cd0" label="Nome: " placeholder="ex: João" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.sobrenome" color="#b39cd0" label="Sobrenome:" placeholder="ex: Silva" />
        </vs-col>
      </vs-row>

      <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.cpf" color="#b39cd0" label="CPF: " placeholder="032.123.766-88" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.rg" color="#b39cd0" label="RG: " placeholder="1.234.567" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input v-model="candidato.nascimento" color="#b39cd0" label="Nascimento:" placeholder="31/01/2000" />
        </vs-col>
      </vs-row>

      <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-input v-model="candidato.endereco.rua" color="#b39cd0" label="Rua: " placeholder="ex: Av. Brasil" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-input v-model="candidato.endereco.bairro" color="#b39cd0" label="Bairro:" placeholder="ex: Jd. Botânico" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
          <vs-input v-model="candidato.endereco.numero" color="#b39cd0" label="Número:" placeholder="123" />
        </vs-col>
      </vs-row>

      <vs-row vs-type="flex" vs-jusitfy="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <vs-textarea counter="1000" color="#b39cd0" label="Experiências profissionais" v-model="candidato.experiencias" />
        </vs-col>
      </vs-row>

      <vs-row vs-type="flex" vs-jusitfy="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
          
          <input
            class="inputfile"
            id="file"
            name="file"
            type="file"
            accept="image/jpeg"
            @change="detectFiles($event.target.files)"
            value="Escolher uma foto"
          />
          <label for="file"> <vs-icon icon="camera_alt"></vs-icon> Escolha uma foto...</label>
          <!-- <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div> -->
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <p style="margin: 0 auto;" v-if="progressUpload == 100">Pronto para enviar!</p>
          <p style="margin: 0 auto;" v-else-if="progressUpload > 0 && progressUpload != 100">Carregando...</p>
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <vs-button @click="enviarCurriculo" icon="send" color="#b39cd0" gradient-color-secondary="#845EC2" type="gradient" size="small">Enviar</vs-button>
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col v-if="alert" vs-type="flex" vs-justify="center" vs-align="center">
          <vs-alert :active.sync="alert" color="success" icon="check_circle" closable>Currículo Enviado com sucesso!</vs-alert>
        </vs-col>
      </vs-row>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      candidato: {
        nome: '',
        sobrenome: '',
        cidade: '',
        uf: '',
        endereco: { rua: '', bairro: '', numero: '' },
        email: '',
        telefone: '',
        experiencias: '',
        nascimento: ''
      },
      alert: false,
      progressUpload: 0,
      file: null,
      uploadTask: '',

    }
  },
  methods: {
    detectFiles(fileList) {
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x])
      })
    },
    upload(file) {
      this.uploadTask = this.$firebase.storage().ref(`${this.candidato.cpf}pic`).put(file);
    },
    enviarCurriculo() {
      this.axios.post(`/candidatos.json`, this.candidato).then(() => {
        // console.log('enviou')

      })
    }
  },
  watch: {
    uploadTask: function () {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      },
        () => {
          this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.$emit('url', downloadURL)
          })
        })
    }
  },
}
</script>

<style>
.candidato-form {
  text-align: center;
  margin: 5em auto;
  padding: 2em;
  background: white;
  width: 55%;
  border-radius: 15px;
}

.vs-row {
  text-align: left;
}

.vs-col {
  margin: 15px 25px;
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em;
  background-image: linear-gradient(to left bottom, #b39cd0, #a88ccd, #9c7dc9, #906dc6, #845ec2);
  border-radius: .5em;
  color: white;
}

.inputfile:focus + label,
.inputfile + label:hover {
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.185)
}

.vs-textarea{
  height: 200px;
}

</style>
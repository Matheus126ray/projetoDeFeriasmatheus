<template>
  <q-page>
        <div v-if="show == true">
    <h4>Publicar Receita</h4>

    <form @submit.prevent="createReceita()">
      <q-input filled v-model="form.nome" label="Nome da Receita" required />
      <br />
      <q-input
        v-model="form.descricao"
        filled
        type="textarea"
        label="Descrição"
        required
      />

      <br />

      <q-input
        v-model="form.ingredientes"
        filled
        type="textarea"
        label="Ingredientes"
        required
      />
      <br />
      <q-input
        v-model="form.mododepreparo"
        filled
        type="textarea"
        label="Modo de Preparo"
        required
      />
      <br />
      <q-input filled v-model="form.redimento" label="Porções" required/>
      <br>
      <div class="column items-center" style="height: 150px">
        <div class="col">
          <q-btn
            type="submit"
            unelevated
            rounded
            color="deep-purple-10"
            class="q-btn"
            label="Publicar Receita"
          />
        </div>
      </div>
    </form>
    </div>
        <div v-if="show == false">
      <div class="row justify-center">
        <h4>{{ msgUser }}</h4>
        <div class="column items-center" style="height: 150px">
          <div class="col">
            <q-btn
              type="submit"
              unelevated
              @click="toHome()"
              rounded
              color="deep-purple-10"
              class="q-btn"
              label="Voltar a Home"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  name: "PageIndex",
  data() {
    return {
      lorem: "rasd",
      form: {
        nome: "",
        descricao: "",
        ingredientes: "",
        mododepreparo: "",
        redimento: ""
      },
      show: true,
      msgUser: ""
    };
  },
  methods: {
    async createReceita() {
      axios
        .post("http://localhost:3000/receita", this.form)
        .then(response => {
          console.log(response.data);
            this.show = false;
          if(response.status == 200){
            this.msgUser = "Receita Publicada com Sucesso!";
          }else{
            this.msgUser = "Ocorreu um Erro, tente novamente mais tarde.";
          }
        })
        .catch(error => {
                    this.show = false;
           this.msgUser = "Ocorreu um Erro, tente novamente mais tarde.";
          console.log(error);
        });
    },
    async toHome(){
      this.$router.push({
        name: "home"
      });
    }

  },
  beforeMount() {
  }
};
</script>

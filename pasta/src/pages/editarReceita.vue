<template>
  <q-page>
    <div v-if="show == true">
      <h4 style="margin-top: 100px">Editar Receita</h4>

      <form @submit.prevent="updateReceita()">
        <q-input filled v-model="form.nome" label="Nome da Receita" required />
        <br />
        <q-input
          v-model="form.descricao"
          filled
          type="textarea"
          label="Nome da Receita"
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
        <q-input
          filled
          v-model="form.redimento"
          label="Nome da Receita"
          required
        />
        <br />
        <div class="column items-center" style="height: 150px">
          <div class="col">
            <q-btn
              type="submit"
              unelevated
              rounded
              color="deep-purple-10"
              class="q-btn"
              label="Salvar alterações"
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
                <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="toHome()" fab icon="arrow_back" color="black" />
          </q-page-sticky>
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  name: "PageIndex",
  props: {
    idReceita: {
      type: Object
    }
  },
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
    async getReceita() {
      axios
        .get("http://localhost:3000/receita/" + this.idReceita.id)
        .then(response => {
          console.log(response);
          this.form = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async verifyProps() {
      if (this.idReceita == undefined) {
        this.$router.push({
          name: "home"
        });
      } else {
        this.getReceita();
      }
    },
    async updateReceita() {
      axios
        .put("http://localhost:3000/receita/" + this.idReceita.id, this.form)
        .then(response => {
          console.log(response);
            this.show = false;
          if(response.status == 204){
            this.msgUser = "Dados alterados com sucesso!";
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
    this.verifyProps();

    // console.log(this.idReceita);
  }
};
</script>

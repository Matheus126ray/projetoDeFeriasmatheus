<template>
  <q-page>
    <h4>Receitas</h4>

    <div class="" v-for="receita in receitas" :key="receita.id">
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-h6">{{ receita.nome }}</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <strong>Descrição:</strong>
          {{ receita.descricao }}
        </q-card-section>
        <q-card-actions vertical>
          <q-btn @click="toSee(receita.id)" flat>Visualizar</q-btn>
          <q-btn @click="toEdit(receita.id)" flat>Editar</q-btn>
          <q-btn @click="deleteReceita(receita.id)" flat color="red"
            >Apagar</q-btn
          >
        </q-card-actions>
      </q-card>
      <br />
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
      receitas: ""
    };
  },
  methods: {
    async getReceitas() {
      axios
        .get("http://localhost:3000/receita")
        .then(response => {
          console.log(response.data);
          this.receitas = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async deleteReceita(id) {
      axios
        .delete("http://localhost:3000/receita/"+id)
        .then(response => {
          console.log(response);
          if(response.status == 204){
         this.$q.notify({
          color: "positive",
          position: "top",
          message: "Deletado com sucesso",
          icon: "delete"
        });
            this.getReceitas();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    async toEdit(id) {
      this.$router.push({
        name: "editar",
        params: {
          idReceita: {
            id
          }
        }
      });
    },
    async toSee(id) {
      this.$router.push({
        name: "visualizar",
        params: {
          idReceita: {
            id
          }
        }
      });
    }
  },
  beforeMount() {
    this.getReceitas();
  }
};
</script>

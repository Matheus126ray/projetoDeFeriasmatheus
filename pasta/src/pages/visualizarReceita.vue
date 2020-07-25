<template>
  <q-page>
    <div v-if="show == true">


    <div class="row justify-center">

     <h4></h4>
    </div>
          <div>
        <q-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFH06smOHBdiTPbipWH4PrdLVoIo722eQaig&usqp=CAU"
         style="height: 480px; max-width: 100%"
          :ratio="1"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <h4>{{receita.nome}}</h4>
          </div>
        </q-img>
      </div>


    <div class="col">
      <br>
      <strong>Descrição: </strong>
      <p>{{receita.descricao}}</p>
    </div>
    <div class="col">
      <strong>Ingredientes:</strong>
      <p> {{receita.ingredientes}}</p>
    </div>
    <div class="col">
      <strong>Rendimento:</strong>
      <p> {{receita.redimento}}</p>
    </div>



            <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="toHome()" fab icon="arrow_back" color="black" />
          </q-page-sticky>
    </div>
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
      receita: '',
      show: true,
    };
  },
  methods: {
    async getReceita() {
      axios
        .get("http://localhost:3000/receita/" + this.idReceita.id)
        .then(response => {
          console.log(response);
          this.receita = response.data;
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
<style>
@media only screen and (max-width: 600px) {
#img{
  width: 100%;
}
}
#img{
  width: 200px;
}

</style>

<template>
  <div>
    <div class="form-name">
      <h1>Atsiliepimo forma</h1>
    </div>
    <form @submit="onSubmit">
      <div class="form-row-1">
        <div class="form-col">
          <label for="name">Vardas</label>
          <input type="text" id="name" v-model="name" required />
        </div>

        <div class="form-col">
          <label for="secondName">Pavardė</label>
          <input type="text" id="secondName" v-model="secondName" required />
        </div>
        <div class="form-col">
          <label for="email">E-paštas</label>
          <input type="text" id="email" v-model="email" required />
        </div>
      </div>

      <div class="form-row-2">
        <label for="review">Atsiliepimas</label>
        <textarea id="review" name="review" v-model="review" maxlength="300" required />
      </div>

      <input class="button" type="submit" value="Siųsti" />
    </form>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "AddForm",

  data() {
    return {
      name: "",
      secondName: "",
      email: "",
      review: "",
    };
  },

  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.secondName) {
      this.secondName = localStorage.secondName;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
  },

  methods: {
    onSubmit() {
      localStorage.name = this.name;
      localStorage.secondName = this.secondName;
      localStorage.email = this.email;

      Axios.post(
        "http://192.168.10.253:10004/reviews",
        {
          first_name: this.name,
          last_name: this.secondName,
          email: this.email,
          content: this.review,
          calculated_rating: 0,
          avatar_url: "https://www.gravatar.com/avatar/HASH",
        },
        alert("Review successfully posted!")
      );
    },
  },
};
</script>

<style scoped>
.form-name {
  border-bottom: 1px solid #bdbdbd;
  padding: 10px 0;
  margin-bottom: 10px;
}
.form-name h1 {
  font-weight: 300;
  font-size: 24px;
}

.form-row-1 {
  display: flex;
  justify-content: space-between;
}

.form-col {
  width: 100%;
}

.form-row-1 label,
.form-row-2 label {
  font-size: 14px;
  font-weight: 700;
}

.form-row-1 input {
  border: 1px solid #f2f2f2;
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 5px;

  margin-top: 10px;
  height: 40px;
  width: 90%;
}

.form-row-2 {
  margin-top: 20px;
}

.form-row-2 textarea {
  border: 1px solid #f2f2f2;
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  width: 100%;
  height: 86.67px;
  margin-top: 10px;
  padding: 5px;

  resize: none;
}

.button {
  margin-top: 20px;
  float: right;
  height: 40px;
  width: 10%;
  font-size: 14px;
  text-transform: uppercase;

  background: #0054a6;
  color: #f2f2f2;

  cursor: pointer;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}
</style>

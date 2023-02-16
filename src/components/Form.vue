<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      errorMessage: "",
      autorization: false,
      urlApi: "http://localhost:3001/users",
      user: {},

      rout: "",
    };
  },
  async mounted() {
    const respons = await fetch(this.urlApi, {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await respons.json();
    result.map((el) => (this.user = { ...el }));
  },

  methods: {
    validation(firstValue, secondValue) {
      let message;

      if (firstValue.trim() === "" && secondValue.trim() === "") {
        return (message = "Sorry, but you didn't enter Login and Password!");
      }
      if (firstValue.trim() === "") {
        return (message = "Sorry, but you didn't enter Login!");
      }
      if (secondValue.trim() === "") {
        return (message = "Sorry, but you didn't enter Password!");
      }
    },
    getUser() {
      this.errorMessage = this.validation(this.login, this.password);

      if (this.login.length > 1 && this.password.length > 1) {
        if (
          this.login === this.user.login &&
          this.password === this.user.password
        ) {
          this.rout = "home";
        } else {
          this.errorMessage = "Sorry, but there is no such user. Try again!";
          this.rout = "";
        }
      }

      if (
        this.errorMessage === "Sorry, but there is no such user. Try again!"
      ) {
        this.login = "";
        this.password = "";
      }
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="form">
      <h1>Autorization</h1>
      <input type="text" placeholder="Enter your login" v-model="login" />

      <input
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />

      <p v-show="errorMessage != ''" class="error">{{ errorMessage }}</p>

      <router-link :to="{ name: rout }">
        <button class="btnSend" @click="getUser()">Send</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 700px;
  height: 400px;
  border-radius: 50px;
  padding: 20px;
  background-color: #0fbb9641;
  display: flex;
  justify-content: center;
  text-align: center;
}
.form {
  display: flex;
  flex-direction: column;
  width: 500px;
  color: #fff;
}
.form h1 {
  font-size: 2.5rem;
  margin-top: 20px;
}
.form input {
  margin-top: 40px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #ac9caf;
  color: #fff;
  padding: 5px 8px;
  outline: none;
}
.form input:focus {
  border-bottom-color: #fff;
}
.btnSend {
  width: 100%;
  margin-top: 40px;
  background: linear-gradient(
    339deg,
    rgba(9, 9, 170, 0.945) 0%,
    rgba(0, 120, 255, 1) 100%
  );
  color: #fff;
  border-radius: 10px;
  border: 2px sold #fff;
  padding: 10px 15px;
  cursor: pointer;
  transition: transform 500ms ease;
}
.btnSend:hover {
  transform: scale(1.1) translateY(-5px);
}
.error {
  margin-top: 10px;
  color: #d03939;
}
</style>

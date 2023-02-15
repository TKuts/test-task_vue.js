<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      placeholderLogin: "Enter your login",
      placeholderPassword: "Enter your password",

      error: false,
    };
  },

  methods: {
    getUser() {
      if (this.login.trim() === "" && this.password.trim() === "") {
        this.error = true;
        this.placeholderLogin = "Please, enter login!";
        this.placeholderPassword = "Please, enter password!";
        return false;
      }
      if (this.login.trim() === "") {
        this.error = true;
        this.placeholderLogin = "Please, enter login!";
        return false;
      }
      if (this.password.trim() === "") {
        this.error = true;
        this.placeholderPassword = "Please, enter password!";
        return false;
      }

      this.error = false;

      this.placeholderLogin = "Enter your login";
      this.placeholderPassword = "Enter your password";

      this.login = "";
      this.password = "";
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="form">
      <h1>Autorization</h1>
      <input
        :class="{ active: error === true }"
        type="text"
        :placeholder="placeholderLogin"
        v-model="login"
      />

      <input
        :class="{ active: error === true }"
        type="password"
        :placeholder="placeholderPassword"
        v-model="password"
      />

      <button @click="getUser()">Send</button>
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
  margin-top: 50px;
}
.form input {
  margin-top: 50px;
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
.form button {
  margin-top: 50px;
  background: #ac9caf;
  color: #fff;
  border-radius: 10px;
  border: 2px sold #fff;
  padding: 10px 15px;
  cursor: pointer;
  transition: transform 500ms ease;
}
.form button:hover {
  transform: scale(1.1) translateY(-5px);
}
.error {
  margin-top: 10px;
  color: #d03939;
}

.active::placeholder {
  color: #d03939;
}
</style>

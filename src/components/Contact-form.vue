<template>
<div>
  <form @submit.prevent="handleSubmit">
    <label>First Name</label>
    <input type="name" required v-model="name">
    <label>Last Name</label>
    <input type="surname" required v-model="surname">
    <label>Company</label>
    <input type="company" required v-model="company">
    <label>Email</label>
    <input type="email" required v-model="email">
    <div class="submit">
      <button>Send</button>
    </div>
  </form>
  
</div>
</template>

<script>
export default {

  name: 'Contact',

  data() {
    return {
      name: '',
      surname: '',
      company: '',
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log('form submitted')
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  background: #333;
  padding: 0.5em;
}
.P-Title {
  padding: 2em;
  margin: auto;
  text-align: left;
}
form {
  max-width: 40vw;
  margin: 3rem auto;
  background: white;
  text-align: left;
  padding: 2em;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 2.5rem 0 1.5rem;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 1em 0.6em;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #e20388;
  border: 0;
  padding: 1em 2em;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
button:hover {
  background: #770f4d;
  cursor: pointer;
}
.submit {
  text-align: center;
}

@media only screen and (max-width: 600px) {
  form {
    max-width: 80vw;
    margin: 3rem auto;
    background: white;
    text-align: left;
    padding: 2em;
    border-radius: 10px;
  }
}
</style>

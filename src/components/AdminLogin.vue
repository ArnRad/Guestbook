<template>
  <div class="admin-table">
    <div class="heading">
      Admin login
    </div>

    <div class="form-col">
      <label for="password">Password</label>
      <input type="password" id="password" />
    </div>

    <button class="login-button">Siųsti</button>
  </div>
</template>

<script>
export default {
  name: "AdminLogin"
};
</script>

<style scoped>
body {
  background: #e5e5e5;
}

.admin-table {
  width: 332px;
  height: 298px;
  background: #ffffff;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);

  padding: 50px;
}

.heading {
  color: #828282;
  font-size: 24px;
  padding: 5px 0;

  border-bottom: 1px solid #bdbdbd;
}

.form-col {
  margin: 20px 0;
}

.form-col label {
  color: #828282;
  font-size: 14px;
  font-weight: 700;
}

.form-col input {
  border: 1px solid #f2f2f2;
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 5px;

  margin-top: 10px;
  height: 40px;
  width: 100%;
}

.login-button {
  margin-top: 20px;
  float: right;
  height: 40px;
  width: 50%;
  font-size: 14px;
  text-transform: uppercase;

  background: #0054a6;
  color: #f2f2f2;

  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}
</style>

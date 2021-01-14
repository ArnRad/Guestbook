<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <a href="/">
          <img alt="Teltonika Logo" src="../assets/teltonika-logo.png" />
        </a>
      </div>
      <div class="crossSign">
        <img src="../assets/Line-2.png" />
      </div>
      <div class="pageName">
        <h2>Svečių knyga</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: 100px;
}
.logo img {
  width: 213px;
  height: 42px;
  padding-right: 15px;
}

.crossSign img {
  padding-right: 15px;
}

.pageName h2 {
  color: #0054a6;
  font-size: 21px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>

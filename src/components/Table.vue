<template>
  <div>
    <Header />
    <div class="container">
      <div class="table">
        <AddForm />
        <ReviewsTable />
      </div>
    </div>
  </div>
</template>
<script>
import AddForm from "./modals/AddForm";
import ReviewsTable from "./modals/ReviewsTable";
import Header from "./Header";

export default {
  name: "Table",

  components: {
    AddForm,
    ReviewsTable,
    Header,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.table {
  width: 70%;
  height: 100%;
  padding: 40px;

  color: #828282;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}
</style>

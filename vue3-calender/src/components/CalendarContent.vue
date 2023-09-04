<template>
  <div>
    <p>Hello World</p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  mounted() {
    let data = moment().startOf("month");
    const youbiNum = data.day();
    console.log(youbiNum);
  },
};
</script>

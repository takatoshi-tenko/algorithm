<template>
  <div>
    <h2>今日の日付</h2>
    <p class="today">today</p>
    <p>目標の日付：<input type="date" name="date" /></p>
    <p>入力した日付まで後<span class="leftDay"></span>日</p>
    <button @click="enableCustomLayout">Update Layout</button>
    <button @click="handleClick">Coupon Get</button>
    <LazyCoupon v-if="show" />
    <div>
      <p>Count: {{ count }}</p>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
    <h2>{{ $hello('World') }}</h2>
  </div>
</template>

<script setup>
const route = useRoute();
const { count, inc, dec } = useCounter(100);
const { $hello } = useNuxtApp()
const enableCustomLayout = () => {
  route.meta.layout = "custom";
};
const show = ref(false);

const handleClick = () => {
  show.value = true;
};
</script>

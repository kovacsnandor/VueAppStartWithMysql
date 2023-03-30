
<template>
  <div class="home">
    <h1>About</h1>
    <button
      class="btn btn-outline-secondary"
      @click="storeCounter.increaseCount"
    >
      <span class="fw-bold text-warning fs-2">
        {{ storeCounter.count }}
      </span>
    </button>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import { useCounterStore } from "@/stores/counter";
const storeCounter = useCounterStore();
export default {
  data() {
    return {
      storeCounter,
    };
  },
};
</script>


<style>
.counter-button {
  font-size: 50px;
}
</style>

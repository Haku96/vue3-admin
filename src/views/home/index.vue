<template>
  <div class="main">
    <div class="index-page center">
      <div class="title">Hello Vue.js</div>

      <div class="grid">
        <span class="entry" v-for="(item, index) in routes" @click="handleEntryClick(item)">
          {{ padStart(index + 1) + " " + item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const routes = router.getRoutes();

const padStart = (number) => {
  return (number + "").padStart(3, "0");
};

const handleEntryClick = (e) => {
  router.push({ name: e.name });
};
</script>

<style lang="less">
.grid {
  display: grid;
  row-gap: 0.5rem;
  column-gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.entry {
  color: #9ca3af;
  display: inline;
  transition: 0.15s;
  &:hover {
    color: rgba(55, 65, 81, 1);
  }
}

.main {
  display: grid;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  place-items: center;
  user-select: none;
  justify-content: center;
}

.index-page {
  max-height: 100%;
  overflow: auto;
  width: 600px;
  height: 600px;
}

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  margin-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
}
</style>

<template>
  <div class="main">
    <div class="text"><slot name="text">text</slot></div>

    <div class="render"><slot name="render">render</slot></div>
  </div>
</template>

<style lang="less">
.main {
  height: 100%;
  display: flex;
}

.text,
.render {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
}

.text {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
}
</style>

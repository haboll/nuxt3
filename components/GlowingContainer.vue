<template>
  <div class="glowing-container">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.glowing-container {
  position: relative;
  padding: 2px;
  overflow: hidden;
  border-radius: 4px;
}

.glowing-container::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(90deg,
      transparent 25%,
      rgba(255, 255, 255, 0.8) 50%,
      transparent 75%);
  /* animation: rotate 3s linear infinite; */
  transform-origin: center center;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.content {
  position: relative;
  z-index: 1;
  background: #000;
  /* 根据实际背景色修改 */
  min-height: 100%;
  min-width: 100%;
  border-radius: 2px;
  /* 匹配容器圆角 */
}
</style>
<template>
  <div class="border-wrap">
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="less">
@keyframes opacityChange {
  50% {
    opacity: .5;
  }

  100% {
    opacity: 1;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

div.border-wrap {
  background-color: #000;
  padding: 10px;

  div {
    --borderWidth: 12px;
    --bRadius: 10px;
    width: 60%;
    height: 60%;
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding: 2rem;
    z-index: 0;
    border-radius: --bRadius;

    &::after,
    &::before {
      box-sizing: border-box;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #1a232a;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-image: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);
      animation: rotate 4s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      left: calc(var(--borderWidth) / 2);
      top: calc(var(--borderWidth) / 2);
      width: calc(100% - var(--borderWidth));
      height: calc(100% - var(--borderWidth));
      background: #000;
      border-radius: 5px;
      /* 这句效果打开有助于理解动画 */
      // animation: opacityChange 5s infinite linear;
    }

  }
}

div.border-wrap:nth-child(9) div::after {
  animation: opacityChange 5s infinite linear;
}
</style>
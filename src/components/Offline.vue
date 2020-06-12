<template>
  <div class="offline">
    <section class="content">
        <p>Sorry, you cannot edit your photo without an internet connection</p>
        <img src="../assets/graphics/no-wifi.png" />
        <p>Come back when you are online!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Offline"
}
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.content p {
  font-size: 24px;
  color: $peach;
  letter-spacing: 5px;
}
.content img {
  width: 20%;
  height: 30%;
}
</style>
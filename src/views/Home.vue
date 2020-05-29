<template>
  <div @click="openCamera" class="home">
    <section class="content">
      <img src="../../public/img/icons/print-512x512.png" />
    </section>
    <article class="description">
      <h1>Welcome to <span>Instablam</span> </h1>
      <p>You can take a photo and edit it after!</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    openCamera() {
      this.$router.push('/camera');
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.home {
  padding: 10px;
}
.description {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 15px;
  padding: 10px;
}
h1 {
  font-size: 36px;
  color: $white;
  letter-spacing: 10px;;
}
span {
  color: $red;
}
p {
  font-size: 24px;
  color: #ffe3e7;
}
</style>

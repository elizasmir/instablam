<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Monoton&display=swap');

$white: #fff3f5;
$rose: #ffccd4;
$peach: #ff988c;
$red: #fd4384;

$MC: "Monoton", cursive;

body {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100vw;
  height: 100vh;

  background-color: $rose;
  font-family: $MC;
}
</style>

<template>
  <div class="wrapper">
    <header class="header">
    <router-link :to="{name: 'task1'}" class="link">Task 1</router-link> 
    <router-link :to="{name: 'task2'}" class="link">Task 2</router-link>
  </header>
  <main class="main">
    <router-view/>
  </main>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles';
#app, body, html {
  height: 100%;
}
body {
  background: linear-gradient(90deg,#fbc7d4,#9796f0);
  color: #fff;
}
.header {
  
  background-color: #9796f0;
  padding: 20px;
  font-family: "Reggae One";
  // font-weight: 600;
  font-size: 24px;
  display: flex;
  gap: 40px;
  .link {
    position: relative;
    display: block;
    width: fit-content;
    color: #fff;
  }
  .router-link-active::before {
    content: "";
    width: 100%;
    height:3px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
  }
 
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

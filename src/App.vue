<template>
  <div id="app">
    <Header />
    <main id="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
:root {
  --primary: #1cc88a;
  --secundary: #4e73df;
  --white: #ffffff;
  --text: #5a5c69;
  --bg-gray: #f7f8fb;
  --header-gray: #f8f9fc;
  --border-gray: #e3e6f0;

  font-size: 10px;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  color: #5a5c69;
  background-color: var(--bg-gray);
  font-family: "Open Sans";
}

.btn {
  color: var(--secundary);
}

.btn-active {
  color: var(--primary);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#main {
  flex: 1;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>

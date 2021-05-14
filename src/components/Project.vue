<template>
  <a :href="url" target="_blank">
    <div class="project">
      <div class="logo">
        <img :src="logo" :alt="name + ' logo'" />
      </div>
      <div class="name">
        {{ name }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Project",
  props: {
    logo: String,
    name: String,
    url: String,
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.logo {
  background-color: #161419;
  border-radius: 0.5em;
  width: 40%;
  height: 100%;
  padding: 0.4em;

  display: flex;
  justify-content: center;
}
.name {
  margin-top: 3vh;
  margin-left: 1vw;
}
.project {
  width: 20vw;
  height: 10vh;
  background-color: #253340;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 1.8em;
  font-size: 3ch;
  border-radius: 0.5em;
}

@media only screen and (max-width: 600px) {
  .project {
    flex-direction: column;
  }
  .logo {
    width: 80%;
  }
  .name {
    font-size: 1.2ch;
  }
}
</style>

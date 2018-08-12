<template>
  <div>
    <img class="banner" src="/banner.png" alt="ASU Esports Association">
    <p class="text">
      The website is currently under construction.
    </p>
    <a href="https://discord.gg/asu" class="link">
      But you can still join our Discord server!
    </a>
    <iframe class="discord" src="https://discordapp.com/widget?id=198240842626891776&theme=dark" allowtransparency="true" frameborder="0" />
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .banner {
    display: block;
    margin: 0 auto;
    margin-top: -15vh;
    height: 65vh;
  }
  .text {
    display: block;
    margin-top: -12vh;
    text-align: center;
    font-size: 30px;
  }
  .link {
    display: block;
    color: rgb(140, 29, 64);
    text-decoration: none;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
  }
  .discord {
    display: block;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    width: 75vh;
    height: 40vh;
  }
</style>

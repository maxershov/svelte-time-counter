<script>
  import menuImg from "./images/menu.svg";
  let openMenu = true;
  function chgMenu() {
    openMenu = !openMenu;
  }
</script>

<style>
  h1 {
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    text-shadow: 2px 2px 0px rgb(12, 11, 11);
    font-size: 2.5rem;
    padding: 0 1rem;
  }
  a {
    font-size: 1.6rem;
    margin-right: 1rem;
    color: white;
    text-transform: uppercase;
    text-shadow: 1px 1px 0px rgb(12, 11, 11);
  }
  #menuBtn {
    display: none;
    border: none;
    background-color: none;
  }
  #menuImg {
    width: 4rem;
  }
  .home {
    padding-bottom: 35rem;
  }
  .links {
    text-align: right;
  }
  .home__text {
    text-align: center;
    margin-top: 10rem;
    align-items: center;
  }
</style>

<div id="home" class="home">
  <button id="menuBtn" on:click={chgMenu}>
    <img alt="menuImg" id="menuImg" src={menuImg} />
  </button>
  <nav class={openMenu ? 'links' : 'links_open'}>
    <a href="#home">Главная</a>
    <a href="#about">О Нас</a>
    <a href="#test">Рассчитать</a>
  </nav>
  <div class="home__text">
    <h1>Получите точное время разработки проекта</h1>
  </div>
</div>

<script>
  import menuImg from "./images/menu.svg";
  let openMenu = true;
  function chgMenu() {
    openMenu = !openMenu;
  }
</script>

<style>
  a {
    margin-right: 10px;
    color: rgb(14, 10, 10);
    text-transform: uppercase;
    /* text-shadow: 1px 1px 0px rgb(12, 11, 11); */
  }
  a:hover {
    text-decoration: underline rgb(133, 3, 145);
  }
  #menuBtn {
    display: none;
    border: none;
    background-color: none;
    width: 40px;
  }
  .home {
    height: 100vh;
    text-align: center;
  }
  .links {
    text-align: right;
  }
  .home__text {
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-weight: bold;
    padding-top: 20vh;
    /* font-size: 1.7em; */
    width: 90%;
    margin: 0 auto;
  }
</style>

<div id="home" class="home">
  <input
    type="image"
    id="menuBtn"
    on:click={chgMenu}
    alt="menuImg"
    src={menuImg} />
  <nav class={openMenu ? 'links' : 'links_open'}>
    <a href="#home">Главная</a>
    <a href="#about">О Нас</a>
    <a href="#test">Рассчитать</a>
  </nav>
  <h1 class="home__text">Получите точное время разработки проекта</h1>
</div>

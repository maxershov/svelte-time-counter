<script>
  import menuImg from "./images/menu.svg";
  let openMenu = true;
  function chgMenu() {
    openMenu = !openMenu;
  }
</script>

<style>
  a {
    text-transform: uppercase;
    color: rgb(255, 255, 255);
  }
  a:hover {
    text-decoration: underline var(--btn);
  }
  #menuBtn {
    display: none;
    border: none;
    background-color: none;
    width: 40px;
  }
  .home {
    height: 105vh;
    text-align: center;
  }
  .links {
    text-align: left;
  }
  .links :first-child {
    margin-left: 10px;
  }
  .links :not(:first-child) {
    margin-left: 20px;
  }
  .home__text {
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    text-shadow: 1px 0px 1px white;
    font-weight: bold;
    padding-top: 20vh;
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
  <h1 class="home__text">anti-Deadline neural network</h1>
</div>

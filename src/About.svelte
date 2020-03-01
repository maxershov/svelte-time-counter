<script>
  import dollar from "./images/dollar.svg";
  import clock from "./images/clock.svg";
  import neural from "./images/neural.svg";
</script>

<style>
  h2 {
    padding-top: 2rem;
  }

  .about {
    background-color: white;
    text-align: center;
  }
  .about__text {
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .about__cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .about__card {
    text-align: center;
    padding: 1rem;
    width: 15rem;
  }
  img {
    width: 9rem;
  }
</style>

<div class="about">
  <h2>ABOUT US:</h2>
  <div class="about__text">
    <p>
      Anybody have problems with time measurment for the projects development.
      Our service can help you. Simply put numbers that your business client
      wants, and our neural network can predict real time for the development
    </p>
  </div>
  <h2>OUR ADVANTAGES:</h2>
  <div class="about__cards">
    <div class="about__card">
      <img alt="neural" src={neural} />
      <h3>ACCURATE*</h3>
      <p>Our neural network provides very accurate calculation</p>
      <i>*author's opinion</i>
    </div>
    <div class="about__card">
      <img alt="clock" src={clock} />
      <h3>FAST</h3>
      <p>You get all results faster then you can imagine</p>
    </div>
    <div class="about__card">
      <img alt="dollar" src={dollar} />
      <h3>FREE</h3>
      <p>You can't put a price on time*</p>
      <i>*author's opinion</i>
    </div>
  </div>
</div>

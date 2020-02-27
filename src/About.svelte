<script>
  import dollar from "./images/dollar.svg";
  import clock from "./images/clock.svg";
  import neural from "./images/neural.svg";
</script>

<style>
  h2 {
    text-align: center;
    margin-top:4rem;
  }
  p {
    font-size: 1.1rem;
  }
  .about__cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 6rem;
    padding-right: 6rem;
  }
  .about__card {
    text-align: center;
    padding: 2rem;
    width: 20rem;
  }
  img {
    width: 8rem;
  }
</style>

<div class="about">
  <!-- <h2>ABOUT US:</h2> -->
  <h2>OUR ADVANTAGES:</h2>
  <div class="about__cards">
    <div class="about__card">
      <img alt="neural" src={neural} />
      <h3>ACCURATE*</h3>
      <p>Our neural network provides very accurate calculation</p>
      <p>*author's opinion</p>
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
      <p>*author's opinion</p>
    </div>
  </div>
</div>

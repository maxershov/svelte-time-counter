<script>
  import dollar from "./images/dollar.svg";
  import clock from "./images/clock.svg";
  import neural from "./images/neural.svg";
</script>

<style>
  .about {
    background-color: white;
    text-align: center;
  }
  .about__header {
    padding-top: 20px;
    margin-bottom: 10px;
  }
  .about__text {
    text-align: center;
    width: 90%;
    margin: 0 auto 50px auto;
  }
  .about__cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }
  .card {
    text-align: center;
    width: 250px;
    padding-bottom: 10px;
  }
</style>

<div id="about" class="about">
  <h2 class="about__header">О НАС:</h2>
  <div class="about__text">
    <p>
      Разрабатывая программное обеспечение, мы часто сталкиваемся с неправильно
      назначенными сроками. Это приводит к дедлайнами, стрессам в коллективе и
      низкому качеству продукта.
    </p>
    <p>
      В результате анализа многолетнего опыта разработки проектов в стартапах и
      крупных компаниях, мы создали сервис для точного расчета времени
      разработки. С помощью нейронных сетей, machine learning и AI мы можем
      предсказать реальный срок разработки проекта, исходя из первоначальной
      оценки заказчика.
    </p>
  </div>
  <h2 class="about__header">НАШИ ПРЕИМУЩЕСТВА:</h2>
  <div class="about__cards">
    <div class="card">
      <img alt="clock" width="100px" src={clock} />
      <h3>СКОРОСТЬ</h3>
      <p>Вы получите результат быстрее, чем можете себе представить</p>
    </div>
    <div class="card">
      <img alt="neural" width="100px" src={neural} />
      <h3>ТОЧНОСТЬ</h3>
      <p>
        Наша нейронная сеть проводит очень точные* расчеты, что гарантирует вам
        отсутствие дедлайнов
      </p>
      <i>*мнение автора</i>
    </div>
    <div class="card">
      <img alt="dollar" width="100px" src={dollar} />
      <h3>ЦЕНА</h3>
      <p>Время - бесценно* Поэтому сервис абсолютно бесплатный</p>
      <i>*мнение автора</i>
    </div>
  </div>
</div>

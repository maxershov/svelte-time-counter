<script>
  import dollar from "./images/dollar.svg";
  import clock from "./images/clock.svg";
  import neural from "./images/neural.svg";
</script>

<style>
  .about {
    text-align: center;
    background-color: var(--bg);
    color: white;
  }
  .about__first {
    border-radius: 25px;
    background-color: var(--light);
    position: relative;
    top: -40px;
    margin: 0 45px;
    padding-bottom: 10px;
  }
  .about__second {
    position: relative;
    top: -40px;
  }
  .about__header {
    padding-top: 20px;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }
  .about__text {
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }
  .about__cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }
  .card {
    text-align: center;
    width: 18em;
    padding-bottom: 10px;
  }
</style>

<div id="about" class="about">
  <div class="about__first">
    <h3 class="about__header">О НАС</h3>
    <div class="about__text">
      <p>
        Разрабатывая программное обеспечение, мы часто сталкиваемся с
        неправильно назначенными сроками. Это приводит к дедлайнами, стрессам в
        коллективе и низкому качеству продукта.
      </p>
      <p>
        В результате анализа многолетнего опыта разработки проектов в стартапах
        и крупных компаниях, мы создали сервис для точного расчета времени
        разработки. С помощью нейронных сетей, machine learning и AI мы можем
        предсказать реальный срок разработки проекта, исходя из первоначальной
        оценки заказчика.
      </p>
    </div>
  </div>
  <div class="about__second">
    <h3 class="about__header">НАШИ ПРЕИМУЩЕСТВА</h3>
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
          Наша нейронная сеть проводит очень точные* расчеты, что гарантирует
          вам отсутствие дедлайнов
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
</div>

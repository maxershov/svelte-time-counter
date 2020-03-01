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
  <h2>О НАС:</h2>
  <div class="about__text">
    <p>
      Разрабатывая программное обеспечение, мы часто сталкиваемся с неправильно
      назначенными сроками. Это приводит к дедлайнами, стрессам в коллективе и
      низкому качеству продукта.
    </p>
    <p>
      В результате анализа многолетнего опыта разработки проектов в стартапах и
      крупных компаниях, мы создали сервис для точного расчета времени разработки.
      С помощью нейронных сетей, machine learning и AI мы можем предсказать
      реальный срок разработки проекта, исходя из первоначальной оценки
      заказчика.
    </p>
  </div>
  <h2>НАШИ ПРЕИМУЩЕСТВА:</h2>
  <div class="about__cards">
    <div class="about__card">
      <img alt="clock" src={clock} />
      <h3>СКОРОСТЬ</h3>
      <p>Вы получите результат быстрее, чем можете себе представить</p>
    </div>
    <div class="about__card">
      <img alt="neural" src={neural} />
      <h3>ТОЧНОСТЬ*</h3>
      <p>
        Наша нейронная сеть проводит очень точные расчеты, что гарантирует вам
        отсутсвие делайнов
      </p>
      <i>*мнение автора</i>
    </div>
    <div class="about__card">
      <img alt="dollar" src={dollar} />
      <h3>БЕСПЛАТНО</h3>
      <p>Время - бесценно*</p>
      <i>*мнение автора</i>
    </div>
  </div>
</div>

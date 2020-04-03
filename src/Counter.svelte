<script>
  import { fade } from "svelte/transition";
  import { fly } from "svelte/transition";
  let input;
  let answer;
  let type = "часов";
  let promise;
  let loading = true;
  let status;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function handleClick() {
    promise = countData();
  }
  async function countData() {
    await sleep(3000);
    loading = false;
    return (+input * 3.14).toFixed(2);
  }

  function randomInteger(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }
</script>

<style>
  .counter {
    padding-top: 20rem;
    text-align: center;
    padding-bottom: 10rem;
    background-color: rgb(255, 255, 255, 0.7);
  }
  h2 {
    text-shadow: 2px 2px 0px rgb(255, 255, 255);
  }
  p {
    padding: 0 3rem;
  }
  input {
    width: 20rem;
  }
  select,
  input,
  button {
    font-size: 1.5rem;
  }
  select {
    cursor: pointer;
  }
  button {
    display: block;
    margin: 0 auto;
    margin-top: 0.5rem;
    cursor: pointer;
    width: 10rem;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

<div id="test" class="counter">
  <h2>ПОПРОБУЙТЕ СЕЙЧАС:</h2>
  <p>
    Введите предоставленное заказчиком время разработки, и наша нейросеть
    рассчитает точное время разработки
  </p>
  <form on:submit|preventDefault={handleClick}>
    <input
      required
      type="number"
      bind:value={input}
      placeholder="Введите время"
      on:input={() => (loading = true)} />
    <select bind:value={type} on:input={() => (loading = true)} id="timeChose">
      <option value="часов">Часов</option>
      <option value="дней">Дней</option>
    </select>
    <button type="submit">Запустить</button>
  </form>
  {#await promise}
    <p
      in:fade
      out:fly={{ y: 300, duration: 3000 }}
      on:introstart={() => (status = '...загрузка нейронной сети...')}
      on:introend={() => (status = `...обработка ${randomInteger(1000000, 100000000)} результатов...`)}>
      {status}
    </p>
  {:then number}
    {#if !loading}
      <h3 transition:fly={{ y: 300, duration: 3000 }}>
        Результат: {number} {type}
      </h3>
    {/if}
  {/await}

</div>

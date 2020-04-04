<script>
  import { fade } from "svelte/transition";
  import { fly } from "svelte/transition";
  let input;
  let answer;
  let promise;
  let loading = true;
  let status;
  let hours = false;

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
  input::placeholder {
    /* font-size: 1.3rem; */
    font-style: oblique;
  }
  input,
  button {
    font-size: 1.5rem;
    border-radius: 1em;
    border-color: rgb(133, 3, 145);
  }
  button {
    display: block;
    font-weight: bold;
    color: white;
    margin: 0 auto;
    margin-top: 0.5rem;
    cursor: pointer;
    width: 10rem;
    background-color: rgb(133, 3, 145);
  }
  button:hover,
  button:focus {
    border-color: white;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .toggle-check-input {
    width: 1px;
    height: 1px;
    position: absolute;
  }

  .toggle-check-text {
    font-weight: bold;
    font-size: 1.1rem;
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    background: rgb(133, 3, 145);
    padding: 0.25em 0.5em 0.25em 2em;
    border-radius: 1em;
    min-width: 2em;
    color: #fff;
    cursor: pointer;
  }

  .toggle-check-text:after {
    content: " ";
    display: block;
    background: #fff;
    width: 1.1em;
    height: 1.1em;
    border-radius: 1em;
    position: absolute;
    left: 0.3em;
    top: 0.25em;
    transition: left 0.15s, margin-left 0.15s;
  }

  .toggle-check-text:before {
    content: "Дней";
  }

  .toggle-check-input:checked ~ .toggle-check-text {
    padding-left: 0.5em;
    padding-right: 2em;
  }

  .toggle-check-input:checked ~ .toggle-check-text:before {
    content: "Часов";
  }

  .toggle-check-input:checked ~ .toggle-check-text:after {
    left: 100%;
    margin-left: -1.4em;
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
      placeholder=" Введите время"
      on:input={() => (loading = true)} />
    <label class="toggle-check">
      <input
        on:click={(loading = true)}
        bind:checked={hours}
        type="checkbox"
        class="toggle-check-input" />
      <span class="toggle-check-text" />
    </label>
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
        Результат: {number} {hours ? 'часов' : 'дней'}
      </h3>
    {/if}
  {/await}

</div>

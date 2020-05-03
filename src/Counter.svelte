<script>
  import { fade } from "svelte/transition";
  import { fly } from "svelte/transition";
  let input;
  let answer;
  let promise;
  let loading = true;
  let status;
  let hours = false;
  let open = false;

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

  function openModal() {
    open = !open;
  }
</script>

<style>
  .counter {
    height: 100vh;
    text-align: center;
    color: white;
  }
  .counter__center {
    padding-top: 50vh;
    width: 80%;
    margin: 0 auto;
  }
  input::placeholder {
    font-style: oblique;
  }
  button {
    font: inherit;
    text-transform: uppercase;
    display: block;
    font-weight: bold;
    color: white;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 20px;
    background-color: var(--btn);
    border: none;
  }
  button:hover,
  button:focus {
    box-shadow: inset 2px 1px 2px black, inset -2px -1px 2px black;
    border: none;
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
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    background: var(--btn);
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
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .counter__modal {
    display: none;
  }
  .modal {
    position: fixed;
    width: 90vw;
    height: 80vh;
    background-color: var(--normal);
    top: 5vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 1em;
    animation: fadein 0.4s;
  }
  .counter__modal--open {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.562);
    animation: fadein 1s;
  }
  .close__btn {
    top: 10px;
    left: 10px;
    position: absolute;
    border-radius: 25px;
  }
  .open__btn {
    padding: 15px;
  }
  .text {
    padding: 20px 5px 0 5px;
    margin-bottom: 30px;
    color: var(--red);
  }
  .input__days {
    width: 50%;
    font-size: 1.2em;  /*fix ios autozoom */
    border-radius: 25px;
    margin-bottom: 10px;
  }
  .button__submit {
    padding: 10px 15px;
    border-radius: 25px;
  }
  input {
    padding-left:3px;
  }
</style>

<div id="test" class="counter blur">
  <div class="counter__center">
    <h2>ПОПРОБУЙТЕ СЕЙЧАС</h2>
    <button on:click={openModal} class="open__btn">запуск программы</button>
  </div>
  <div class={open ? 'counter__modal--open' : 'counter__modal'}>
    <div class="modal">
      <button class="close__btn" on:click={openModal}>X</button>
      <p class="text">
        Введите предоставленное заказчиком время разработки, и наша нейросеть
        рассчитает точное время до готового продукта
      </p>
      <form on:submit|preventDefault={handleClick}>
        <input
          class="input__days"
          required
          type="number"
          bind:value={input}
          placeholder={` Укажите ${hours ? 'часы' : 'дни'}`}
          on:input={() => (loading = true)} />
        <label class="toggle-check">
          <input
            on:click={(loading = true)}
            bind:checked={hours}
            type="checkbox"
            class="toggle-check-input" />
          <span class="toggle-check-text" />
        </label>
        <button class="button__submit" type="submit">рассчитать</button>
      </form>
      {#await promise}
        <p
          in:fade
          out:fly={{ y: 300, duration: 3000 }}
          on:introstart={() => (status = '...загрузка нейронной сети...')}
          on:introend={() => (status = `...обработка ${Math.floor(randomInteger(1000000, 10000000))} результатов...`)}>
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
  </div>
</div>

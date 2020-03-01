<script>
  import { fade } from "svelte/transition";
  import { fly } from "svelte/transition";
  let input;
  let answer;
  let type = "hours";
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
</script>

<style>
  .counter {
    padding-top: 20rem;
    text-align: center;
    padding-bottom: 10rem;
    border-bottom: solid 1px;
    background-color: rgb(255, 255, 255, 0.7);
  }
  h2 {
    text-shadow: 2px 2px 0px rgb(255, 255, 255);
  }
  input {
    width: 17rem;
  }
  select,
  input,
  button {
    /* font-size: 1.5rem; */
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

<div class="counter">
  <h2>TYPE TIME IN HOURS/DAYS</h2>
  <p>Our neural network will calculate your real project time</p>
  <form on:submit|preventDefault={handleClick}>
    <input
      required
      type="number"
      bind:value={input}
      placeholder="type your time"
      on:input={() => (loading = true)} />
    <select bind:value={type} id="timeChose">
      <option value="hours">HOURS</option>
      <option value="days">DAYS</option>
    </select>
    <button type="submit">COUNT</button>
  </form>
  {#await promise}
    <p
      in:fade
      out:fly={{ y: 300, duration: 3000 }}
      on:introstart={() => (status = '...starting our neural network...')}
      on:introend={() => (status = '...loading results')}>
      {status}
    </p>
  {:then number}
    {#if !loading}
      <h3 transition:fly={{ y: 300, duration: 3000 }}>
        Result: {number} {type}
      </h3>
    {/if}
  {/await}

</div>

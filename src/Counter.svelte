<script>
  let input;
  let answer;
  let type = "hours";
  let promise;
  let loading = true;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function handleClick() {
    promise = countData();
  }
  async function countData() {
    await sleep(3000);
    loading = false;
    return +input * 3.14;
  }

  function setLoadingTrue() {
    loading = true;
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
    text-transform: uppercase;
    text-shadow: 2px 2px 0px rgb(255, 255, 255);
  }
  input {
    width: 20vw;
  }
  select, input, button {
    font-size:1.3rem;
  }
  button {
    display: block;
    margin:0 auto;
    margin-top:0.5rem;
  }
</style>

<div class="counter">
  <h2>Type time in hours/days</h2>
  <p>Our neural network will calculate your real project time</p>
  <input
    type="number"
    bind:value={input}
    placeholder="type your time"
    on:input={setLoadingTrue} />
  <select bind:value={type} id="timeChose">
    <option value="hours">Hours</option>
    <option value="days">Days</option>
  </select>
  <button on:click={handleClick}>COUNT</button>
  {#await promise}
    <p>...starting our neural network...</p>
  {:then number}
    {#if !loading}
      <h3>Result: {number}</h3>
      <h3>{input} {type}</h3>
      <h3>*</h3>
      <h3>{number} {type}</h3>
    {/if}
  {/await}

</div>

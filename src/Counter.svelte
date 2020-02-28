<script>
  let input;
  let answer;
  let type = "hours";
  let promise;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function handleClick() {
    promise = countData();
  }
  async function countData() {
    await sleep(3000);
    return +input * 3.14;
  }
</script>

<style>
  .counter {
    padding-top: 20rem;
    text-align: center;
    padding-bottom: 10rem;
    border-bottom: solid 1px;
  }
</style>

<div class="counter">
  <h3>Type time in hours/days</h3>
  <p>Our neural network will calculate your real project time</p>
  <input type="number" bind:value={input} />
  <select bind:value={type} id="timeChose">
    <option value="hours">Hours</option>
    <option value="days">Days</option>
  </select>
  <button on:click={handleClick}>COUNT</button>
  {#await promise}
    <p>...start our neural network...</p>
  {:then number}
    {#if number > 0.1}
        <h3>Result: {number}</h3>
      <h3>{input} {type}</h3>
      <h3>*</h3>
      <h3>{number} {type}</h3>
    {/if}
  {/await}

</div>

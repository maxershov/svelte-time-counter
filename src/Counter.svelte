<script>
  let input = 0;
  let answer;
  let type = 'hours';
  $: answer = +input * 3.14;
</script>

<style>
  .counter {
    padding-top: 20rem;
    text-align: center;
    padding-bottom: 10rem;
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
  <h3>First number:</h3>
  <h3>{input} {type}</h3>
  <h3>*</h3>
  <h3>{answer} {type}</h3>
</div>

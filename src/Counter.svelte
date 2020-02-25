<style>
  .counter {
    text-align: center;
  }
</style>

<div class="counter">
  <p>Please, input time</p>
  <p>We count time</p>
  <input type="number" />
  <input
    type="text"
    value={'Hours'}
    placeholder="Chose"
    name="type"
    list="typeList" />
  <datalist id="typeList">
    <option value="Hours">Hours</option>
    <option value="Days">Days</option>
  </datalist>
</div>

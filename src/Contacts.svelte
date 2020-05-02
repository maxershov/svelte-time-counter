<script>
  import facebook from "./images/facebook.svg";
  import github from "./images/github.svg";
</script>

<style>
  .contacts {
    padding-top: 20px;
    text-align: center;
    background-color: var(--bg);
  }
  .signature {
    color:grey;
    font-size:0.6em;
    padding-bottom:5px;
  }
  a {
    margin-right: 10px;
  }
</style>

<div id="#contacts" class="contacts">
  <a href="https://www.facebook.com/maksksErshov">
    <img alt="facebookLogo" src={facebook} />
    Facebook
  </a>
  <a href="https://github.com/maxershov">
    <img alt="githubLogo" src={github} />
    Github
  </a>
  <p class="signature">Max Ershov 2020</p>
</div>

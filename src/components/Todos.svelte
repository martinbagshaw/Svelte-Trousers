<style type="text/scss">
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
  }

  header {
    padding: 1rem 0;
  }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
    font-weight: 100;
    text-align: center;
    margin: 0;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      padding: 1rem;
    }
  }

  button {
    cursor: pointer;
    padding: 0.4em 0.8em;
    background-color: #5091DD;
    border: 0;
    color: white;
    transition: background ease 0.3s;
    &:hover {
      background-color: #2177da;
    }
  }

  .todo-panel {
    text-align: center;
    padding-top: 2rem;
    position: relative;
    &:before {
      content: "";
      height: 1px;
      position: absolute;
      top: 0;
      left: calc(50% - 150px);
      background: white;
      width: 300px;
    }
  }

</style>

<script>
  let todos = ['asd', 'asda'];
  let showList = true;
  // $: console.log(`todos ${todos}`);

  function toggle() {
		showList = !showList;
	}

	function add(todo) {
		todos = [...todos, todo];
	}
</script>

<div class="container">
  <header>
    <h1>Todos</h1>
  </header>

  <section class="todo-panel">
    <button on:click={toggle}>
      {showList ? 'Hide' : 'Show'} Todos
     </button>
  
    {#if todos.length && showList}
      <ul>
        {#each todos as todo}
          <li>{todo}</li>
        {/each}
      </ul>
    {/if}
  </section>

</div>

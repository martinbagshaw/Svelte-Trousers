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
      button {
        margin: 0;
        margin-left: 1rem;
      }
    }
  }

  button,
  .button {
    cursor: pointer;
    padding: 0.4em 0.8em;
    background-color: #5091DD;
    border: 0;
    color: white;
    transition: background ease 0.3s;
    &:hover {
      background-color: #2177da;
    }
    &.remove {
      background-color: tomato;
      &:hover {
        background-color: rgb(180, 29, 3);
      }
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

  .todo-form {
    margin: 1rem 0;
    padding: 1rem;
    input {
      margin: 0;
      margin-right: 1rem;
    }
  }

</style>

<script>
  let todos = [];
  let showList = true;
  let currentItem = '';

  function toggle() {
		showList = !showList;
	}

	function add() {
    todos = [...todos, currentItem];
    currentItem = ''
  }
  
  function remove(value) {
		todos = todos.filter(item => item !== value);
	}
</script>

<div class="container">
  <header>
    <h1>Todos</h1>
  </header>

  <section class="todo-panel">
    {#if todos.length}
    <button on:click={toggle}>
      {showList ? 'Hide' : 'Show'} Todos
    </button>
    {/if}

    <form class="todo-form" on:submit|preventDefault={add}>
      <input bind:value={currentItem}>
      <button type=submit disabled={!currentItem}>
        Add Todo
      </button>
    </form>
  
    {#if todos.length && showList}
      <ul>
        {#each todos as todo}
          <li>
            {todo}
            <button class="remove" on:click={() => remove(todo)}>X</button>      
          </li>
        {/each}
      </ul>
    {/if}
  </section>

</div>

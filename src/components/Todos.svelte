<script lang="ts">
  import { TodoState } from "./TodoState";

  const state = new TodoState();
</script>

<div class="container">
  <header>
    <h1>Todos</h1>
  </header>

  <section class="todo-panel">
    {#if state.todos.length}
      <button on:click={state.toggleList}>
        {state.showList ? "Hide" : "Show"} Todos
      </button>
    {/if}

    <form class="todo-form" on:submit|preventDefault={state.addTodo}>
      <input bind:value={state.currentItem} />
      <button type="submit" disabled={!state.currentItem}> Add Todo </button>
    </form>

    {#if state.todos.length && state.showList}
      <ul>
        {#each state.todos as todo}
          <li>
            {todo}
            <button class="remove" on:click={() => state.removeTodo(todo)}>X</button>
          </li>
        {/each}
      </ul>
    {/if}
  </section>
</div>

<style type="text/scss">
  @import "./todos.scss";
</style>

<script lang="ts">
  import { todoStore } from "./TodoStore";

  const handleToggle = () => {
    todoStore.toggleList();
  };

  const handleAddTodo = () => {
    todoStore.addTodo(currentTodo);
    currentTodo = "";
  };

  const handleRemoveTodo = (todo: string) => {
    todoStore.removeTodo(todo);
  };

  // Local variables
  let currentTodo = "";
</script>

<div class="container">
  <header>
    <h1>Todos</h1>
  </header>

  <section class="todo-panel">
    {#if $todoStore.todos.length}
      <button on:click={handleToggle}>
        {$todoStore.showList ? "Hide" : "Show"} Todos
      </button>
      <!-- <button on:click={todoStore.toggleList}> Save todos </button> -->
    {/if}

    <form class="todo-form" on:submit|preventDefault={handleAddTodo}>
      <input bind:value={currentTodo} />
      <button type="submit" disabled={!currentTodo}> Add Todo </button>
    </form>

    {#if $todoStore.todos.length && todoStore.showList}
      <ul>
        {#each $todoStore.todos as todo}
          <li>
            {todo}
            <button class="remove" on:click={() => handleRemoveTodo(todo)}>X</button>
          </li>
        {/each}
      </ul>
    {/if}
  </section>
</div>

<style type="text/scss">
  @import "./todos.scss";
</style>

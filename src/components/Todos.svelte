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

  const handleLoad = () => {
    todoStore.getSavedTodos();
  };

  const handleSave = () => {
    todoStore.saveTodos();
  };

  const handleDelete = () => {
    todoStore.deleteSavedTodos();
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

    <!-- Load -->
    {#if !$todoStore.todos.length && $todoStore.hasSavedTodos()}
      <button on:click={handleLoad}> Load saved todos </button>
    {/if}

    <!-- Save -->
    {#if $todoStore.todos.length}
      <button on:click={handleSave}> {$todoStore.hasModifiedTodos() ? "Overwrite saved" : "Save"} todos </button>
    {/if}

    <!-- Delete -->
    {#if $todoStore.todos.length && $todoStore.hasSavedTodos()}
      <button on:click={handleDelete}> Delete saved todos </button>
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

<style lang="scss">
  @import "./todos.scss";
</style>

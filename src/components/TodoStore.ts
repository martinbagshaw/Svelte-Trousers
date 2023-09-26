import { writable } from "svelte/store";

/**
 *
 * Making classes reactive using stores
 * - seems to require some boilerplate (arrow functions and current item state) in svelte file
 * - ideally would entirely manage state here
 *
 * Useful links:
 *
 * https://stackoverflow.com/questions/62884259/making-class-instance-reactive-in-svelte-using-stores
 *
 * https://devlinduldulao.pro/svelte-in-a-nutshell-with-store-code-sample/
 *
 * https://gist.github.com/3lpsy/55da83779a50f603a78ae8331e360a37
 */

export class TodoStore {
  private subscribers = new Set<Function>();
  public todos: string[] = [];
  public showList = true;

  constructor() {}

  public subscribe = (sub) => {
    this.subscribers.add(sub);
    sub(this);
    return () => this.subscribers.delete(sub);
  };

  notify = () => {
    this.subscribers.forEach((sub) => sub(this));
  };

  public toggleList() {
    this.showList = !this.showList;
    this.notify();
  }

  public addTodo(todo: string) {
    this.todos.push(todo);
    this.notify();
  }

  public removeTodo(todo: string) {
    this.todos = this.todos.filter((item) => item !== todo);
    this.notify();
  }

  public saveTodos() {
    if (this.todos.length) {
      localStorage.setItem("svelte-todos", JSON.stringify(this.todos));
    }
  }

  public hasSavedTodos() {
    return Boolean(localStorage.getItem("svelte-todos"));
  }

  public hasModifiedTodos() {
    const storedTodos = localStorage.getItem("svelte-todos");
    if (storedTodos) {
      return Boolean(this.todos.length !== JSON.parse(storedTodos).length);
    }
    return false;
  }

  public getSavedTodos() {
    const storedTodos = localStorage.getItem("svelte-todos");

    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  public deleteSavedTodos() {
    localStorage.removeItem("svelte-todos");
    this.todos = [];
  }
}

export const todoStore = new TodoStore();

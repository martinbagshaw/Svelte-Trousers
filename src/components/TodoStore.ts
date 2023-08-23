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
  public todos: string[] = [];
  public showList = true;
  public subscribe: Function;
  private _update: Function;

  constructor() {
    let { subscribe, update } = writable(this); //can also use 'set'
    this.subscribe = subscribe;
    this._update = update;
  }

  // seems to be required for the store to work
  public _subscribe(run) {
    return this._subscribe(run);
  }

  public toggleList() {
    this._update((that) => {
      that.showList = !this.showList;
      return that;
    });
  }

  public addTodo(todo: string) {
    this._update((that) => {
      that.todos.push(todo);
      return that;
    });
  }

  public removeTodo(todo: string) {
    this._update((that) => {
      that.todos = that.todos.filter((item) => item !== todo);
      return that;
    });
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
      this._update((that) => {
        that.todos = JSON.parse(storedTodos);
        return that;
      });
    }
  }

  public deleteSavedTodos() {
    localStorage.removeItem("svelte-todos");
    this._update((that) => {
      that.todos = [];
      return that;
    });
  }
}

export const todoStore = new TodoStore();

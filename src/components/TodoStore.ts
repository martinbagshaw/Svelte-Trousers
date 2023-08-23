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
 */

export class TodoStore {
  public todos: string[] = [];
  public showList = true;
  public subscribe: Function;
  private _update: Function;

  constructor() {
    let { subscribe, update } = writable(this); //can also use 'set'
    this.subscribe = subscribe; // seems to be required for the store to work
    this._update = update;
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

  // public saveTodos() {}

  // public deleteTodos() {}
}

export const todoStore = new TodoStore();

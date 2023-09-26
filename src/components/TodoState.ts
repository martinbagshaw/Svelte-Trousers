/*

wanting a similar thing without stores to this guy:
https://stackoverflow.com/questions/74393992/oop-in-svelte-and-its-reactivity

- the other store class seems to result in a lot of boilerplate and linting complaints
- this, however doesnt work

https://www.reddit.com/r/sveltejs/comments/12nh4c4/svelte_reactive_classes/
https://github.com/ibrahim-koz/svelte-reactive-classes

https://www.google.com/search?q=svelte+state+classes+reactive&client=firefox-b-e&sca_esv=568251480&sxsrf=AM9HkKlbpbIS8CmiGC5VNVakggn757wn2g%3A1695675001999&ei=efIRZfHKPO2I9u8PxeauwAk&ved=0ahUKEwix65fR0caBAxVthP0HHUWzC5gQ4dUDCBA&uact=5&oq=svelte+state+classes+reactive&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXN2ZWx0ZSBzdGF0ZSBjbGFzc2VzIHJlYWN0aXZlMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigATIIECEYFhgeGB1I6FlQgBtYyFhwA3gBkAEAmAFroAGLEaoBBDE5LjW4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIIEAAYigUYkQLCAgUQABiABMICCxAuGIAEGMcBGNEDwgIGEAAYFhgewgIIEAAYigUYhgPCAgcQIRigARgK4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp

*/
import { command } from "svelte-reactive-classes";

export class TodoState {
  _todos: string[] = [];
  public _showList = true;

  constructor() {}

  @command
  addTodo(todo: string) {
    this._todos.push(todo);
  }

  @command
  public removeTodo(todo: string) {
    this._todos = this._todos.filter((item) => item !== todo);
  }

  @command
  public toggleList() {
    this._showList = !this._showList;
  }

  @command
  public hasSavedTodos() {
    return Boolean(localStorage.getItem("svelte-todos"));
  }

  @command
  public getSavedTodos() {
    const storedTodos = localStorage.getItem("svelte-todos");

    if (storedTodos) {
      this._todos = JSON.parse(storedTodos);
    }
  }
}

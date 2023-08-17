export class TodoState {
  public todos: string[] = [];
  public showList = true;
  public currentItem = "";

  public toggleList() {
    this.showList = !this.showList;
  }

  public addTodo() {
    this.todos.push(this.currentItem);
    this.currentItem = "";
  }

  public removeTodo(todo: string) {
    this.todos = this.todos.filter((item) => item !== todo);
  }
}

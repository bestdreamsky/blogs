/**
 * Created by Lidy on 2016/12/16.
 */
import { observable, computed, autorun, action } from 'mobx';

export default class IndexStore {
    @observable todos = [];

    @computed get todoCount() {
        return this.todos.length;
    }

    @computed get activeCount() {
        return this.todos.reduce(
            (sum, todo) => sum + (todo.completed ? 0 : 1),
            0
        )
    }

    @computed get needTodoCount() {
        return this.todos.reduce(
            (sum, todo) => sum + (todo.completed ? 1 : 0),
            0
        )
    }

    subscribeIndexStore() {
        autorun(() => {
            let todo = this.todos;
            console.log(`store change: ${this.todos.length}`);
        })
    }

    @action addTodo(name) {
        // return a promise ---> which means this can be await.
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         this.todos.push({
        //             name: name,
        //             completed: false
        //         })
        //         resolve();
        //     }, 16)
        // })
        return  this.todos.push({
            name: name,
            completed: false
        });
    }

    static init() {
        console.log('indexStore')
        return new IndexStore();
    }

}
import React, {Component} from 'react';

const TodoList = ({todoItem, completeHandler}) => {
    const {id, title, completed} = todoItem;
    return (<div style={{color: completed ? 'yellow' : 'red'}} key={id}>{title}
        <button onClick={(e) => completeHandler(e, todoItem)}>{completed ? 'completed' : 'not done yet'}</button>
    </div>)
};


class RootComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoItems: [
                {
                    id: 1,
                    title: "Learn Js",
                    completed: false
                },
                {
                    id: 2,
                    title: "Learn React",
                    completed: false
                },
                {
                    id: 3,
                    title: "Learn Redux",
                    completed: false
                }

            ]
        };
    }

    completeHandler = (e, todoItem) => {
        console.log(todoItem);
        let {todoItems} = this.state;
        todoItems.map(i => {
            if (i.id === todoItem.key) i.completed = true
        })
        console.log(todoItem);
       /* this.setState({
            todoItems: this.state.todoItems

        })*/

    }

    render() {
        const {todoItems} = this.state;
        console.log(this.state);
        return (
            <div>

                {todoItems.map(todoItem =>
                    (<TodoList todoItem={todoItem} completeHandler={this.completeHandler}></TodoList>))}

            </div>

        );
    }

    /* constructor(props) {
         super(props);

         this.state = {
             list: [{title: 'a'}, {title: 'a'}, {title: 'a'}],
         };
     }

     render() {
         return (
             <div>
                 <ul>
                     {this.state.list.map(item => (
                         <li key={item.title}>{item.title}</li>
                     ))}
                 </ul>
             </div>
         );
     }*/
}

export default RootComponent;
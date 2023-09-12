export interface ToDo {
    id:number,
    date:string,
    from_time:string,
    to_time:string,
    title:string,
    description:string,
    status:boolean
}
export type TodoContextType = {
    todos:ToDo[];
    date:string;
    changeDate:(date:string)=>void;
    saveTodo:(todo:ToDo)=>void;
    updateTodoStatus:(id:number)=>void;
    changeTodo:(id:number,title:string,description:string,from_time:string,to_time:string)=>void;
}   
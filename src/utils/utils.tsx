export const changeTimeFormat=(value:string):string=>{
    const inputDate = new Date(`2000-01-01T${value}`);
    const formattedTime = inputDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return formattedTime
}
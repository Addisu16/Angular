type Student={name:string,zipcode:number};


function get_data<T>(){
    return new Promise(resolve=>resolve({name:"Addis",zipcode:52556})) as T;
}

const data=get_data<Student>();
data.name
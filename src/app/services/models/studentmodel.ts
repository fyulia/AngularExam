export class Student {
    public id: number;
    public name: string;
    public surname: string;
    public middlename: string;
    public phone:string;
    public email:string;
    public birth:string;
    public group:string;
    public stud:string;


    constructor (surname:string, name:string,middlename:string, phone:string, email:string,birth:string, group:string, stud:string, id?:number){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.middlename = middlename;
        this.phone = phone;
        this.email = email;
        this.birth = birth;
        this.group = group;
        this.stud = stud;
    }

  }
  

  
  
  //У студента должны быть: id, фамилия, имя, отчество, телефон, email, дата рождения, группа, направление подготовки.
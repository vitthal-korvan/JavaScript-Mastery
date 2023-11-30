// objects is reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Harshit",age:22};
const person = {
      name: "vitthal",
      age: 24,
      hobbies: ["reading", "sleeping", "listening music"]
    }
    console.log(person);
    
    // how to access data from objects -> dot notation
    console.log(person["name"]);
    console.log(person["age"]);
    console.log(person.hobbies);
    
    // how to add key value pair to objects : 
    
    // dot vs bracket notation -> bracket notation is used when we have variable in key and dot notation is used when we have constant in key.
    person.gender = "male";
    person["gender"] = "male";
    console.log(person);
    
    // how to delete key value pair from objects : 
    delete person.gender;
    delete person["gender"];
    console.log(person);
    
    // how to update key value pair in objects :
    person.name = "Vitthal Korvan";
    console.log(person);
    
    // how to access arrays from objects :
    console.log(person.hobbies[1]);
    console.log(person["hobbies"][1]);
    
    // how to iterate object :
    
    // for in loop 
    // Object.keys 
    
    for (let key in person) {
      // console.log(`${key} : ${person[key]}`);
      console.log(key, " : ", person[key]);
    }
    
    console.log(typeof (Object.keys(person)));
    const val = Array.isArray((Object.keys(person)));
    console.log(val);
    
    for (let key of Object.keys(person)) {
      console.log(person[key]);
    }
    
    
    // computed properties : 
    
    const key1 = "obj-key1";
    const key2 = "obj-key2";
    
    const value1 = "myvalue1";
    const value2 = "myvalue2";
    
    // const obj = {
    //     [key1] : value1,
    //     [key2] : value2
    // }
    
    const obj = {};
    
    obj[key1] = value1;
    obj[key2] = value2;
    console.log(obj);
    
    
    //spread operator in objects -> 
    const obj1 = {
      key1: "value1",
      key2: "value2",
    };
    const obj2 = {
      key1: "valueUnique",
      key3: "value3",
      key4: "value4",
    };
    
    const newObject = { ...obj2, ...obj1, key69: "value69" };
    console.log(newObject);
    
    // object destructuring : it is used to unpack values from objects and assign them to variables
    const band = {
      bandName: "led zepplin",
      famousSong: "stairway to heaven",
      year: 1968,
      anotherFamousSong: "kashmir",
    };
    
    //let { bandName:var1, famousSong:var2, year:var3 } = band;
    let { bandName, famousSong, ...restProps } = band;
    
    console.log(bandName);
    console.log(restProps);
    
    
    // objects inside array :
    // very useful in real world applications
    
    const users = [
        {userId: 1,firstName: 'vitthal', gender: 'male'},
        {userId: 2,firstName: 'maheshwari', gender: 'female'},
        {userId: 3,firstName: 'mahesh', gender: 'male'},
    ]
    
    for(let user of users){
        console.log(user);
    }
    
    
    // nested objects destructring : 
    const [{firstName: user1firstName, userId}, {gender: user2gender}, ,] = users;
    console.log(user1firstName);
    console.log(userId);
    console.log(user2gender);
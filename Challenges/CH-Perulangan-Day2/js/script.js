

const dataUsers = [
    {
        name : 'Achmad Faris Salim',
        class : 11,
        adress : 'Gresik'
    },
    {
        name : 'Taufiiqul Hakim',
        class : 9,
        adress : 'Jombang'
    },
    {
        name : 'Javier Kennedy',
        class : 9,
        adress : 'Jombang'
    }
]
for (let index = 0; index < dataUsers.length ; index++) {
    let i = dataUsers[index].class
    while (i < 10 )  {
    console.log("this is name section : ",dataUsers[index].name);
    console.log("this is class section : ",dataUsers[index].class);
    console.log("this is adress section : ",dataUsers[index].adress);
    break;

    }
}

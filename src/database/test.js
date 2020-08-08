const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    //Inserir dados
    proffyValue ={
        name:"Diego fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" ,
         whatsapp: "40028922",
         bio:  "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."    
    }

    classValue = {
        subject:"Química",
          cost:"40"
         
          //O proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday:"1",
            time_from: "720",
            time_to: "1220"
    },
    {
        weekday:"0",
        time_from: "20",
        time_to: "550"
},

]

//await createProffy(db, { proffyValue, classValue, classScheduleValues  })




    //Consultar dados

    //Todos os proffys
  const selectedProffys =   await db.all("SELECT * FROM proffys")
 // console.log(selectedProffys)

  //consultar as classes de um determinado professor
  //e trazer junto os dados do professor

  const selectClassesAndProffys =  await db.all(`
  SELECT classes.*, proffys.*
  FROM proffys
  JOIN classes ON (classes.proffy_id = proffys.id)
  WHERE classes.proffy_id = 1;
  `)
  console.log(selectClassesAndProffys)


})
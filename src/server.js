

const proffys = [
    { 
        name:"Diego fernandes",
     avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" ,
      whatsapp: "40028922",
      bio:  "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
      subject:"Química",
       cost:"40", 
       weekday:[0],
        time_from:[720], 
       time_to: [1200]
    },
        {
         name:"Paulo Eduardo",
         avatar: "https://avatars1.githubusercontent.com/u/62268049?s=460&u=2fe545f926d73e684d382125c6422dbf02653ba8&v=4" ,
          whatsapp: "40028922",
          bio:  "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
          subject:"Química",
           cost:"40", 
           weekday:[1],
            time_from:[420], 
           time_to: [3200]
        },
        {
            name:"Lucas Oliveira",
            avatar: "https://avatars2.githubusercontent.com/u/62367544?s=460&u=21c0aca498d19e03a79b14972e8c49d37d36f10a&v=4" ,
             whatsapp: "40028922",
             bio:  "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
             subject:"Sexologia",
              cost:"40", 
              weekday:[1],
               time_from:[420], 
              time_to: [3200]
           },
]

const subjects = [
    
 "Artes",
 "Biologia",
 "Ciências",
 "Educação física",
 "Física",
 "Geografia",
 "História",
 "Matemática",
 "Português",
 "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",   
]

//Funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]

}





function pageLanding(req, res){
    return res.render("index.html")

}


function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
    
}



function pageGiveClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    //Adicionar data ao a lista de proffys
    if(isNotEmpty){
        data.subject = getSubject(data.subject)



        proffys.push(data)
        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays})
}


const express = require('express')
const server = express()



//Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server
//Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//Rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)
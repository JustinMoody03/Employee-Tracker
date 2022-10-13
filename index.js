const inquirer = require('inquirer')
const questions = require('./questions')

const menu = async () => {
    var { action } = await inquirer.prompt(questions.mainMenu)
    console.log(action)
    switch (action) {
        case "View Department":
            viewDepartment()
            break;

        default:
            break;
    }
}


const viewDepartment = async () => {
    //query your databe ans console.table your reponse
    var data = await inquirer.prompt(questions.roleQuestions(["Sales", "Engineering"]))
    console.log(data)
    menu()
}
menu()
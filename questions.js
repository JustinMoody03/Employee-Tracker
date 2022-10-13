const questions = {
    mainMenu: [
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: ["View Department", "View Roles", "Exit"]
        }
    ],
    departmentQuestions: [
        {
            type: "input",
            message: "Whats the department name?",
            name: "department"
        }
    ],
    roleQuestions: function(departmentChoices){
        return [
            {
                type: "input",
                message: "Whats the title name?",
                name: "title"
            },
            {
                type: "list",
                message: "What department would you like the role to belong to",
                name: "department",
                choices: departmentChoices
            }
        ]
    }
}

module.exports = questions
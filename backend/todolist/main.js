const fs = require("fs-extra");
const minimist = require("minimist");
const { format } = require("date-fns");
const { gl } = require("date-fns/locale");
const chalk = require("chalk");

const todoPath = "./.tasks.json";
const { _, priority, done, undone, clean, list } = minimist(
  process.argv.slice(2)
);

// Comprobamos se existe o arquivo .tasks.json
async function checkTasksList() {
  try {
    if (!fs.existsSync(todoPath)) {
      const tasksList = { tasks: [], update: new Date() };
      fs.writeFile(todoPath, JSON.stringify(tasksList));
      return tasksList;
    } else {
      const tasksList = require('./.tasks.json');
      return tasksList;
    }
  } catch (error) {
    console.log(error);
  }
}

// Creamos a Task
async function buildTask() {
  const text = _.join(' ');
  const date = new Date();
  const added = format(date, "d 'de' MMMM 'do' yyyy 'as' H:mm", {
    locale: gl,
  });
  const done = false;
  const task = { text, added, priority, done };

  await buildArray(task);
}

// Engadimos a task o array
async function buildArray(task) {
  let tasksList = await checkTasksList();
  tasksList.tasks.push(task);
  fs.writeFile(todoPath, JSON.stringify(tasksList));
  console.log('Task engadida');
};

// Motramos as tasks
async function showTasksList() {
  let tasksList = await checkTasksList();

  if (tasksList.tasks.length < 1) {
    console.log('Non hai ningunha task')
  }

  for (const task of tasksList.tasks) {
    console.log(chalk`
    {blue.bold Nome:} ${chalk.yellow.bold(task.text)}
    {blue.bold Prioridade:} {magenta ${
      task.priority === undefined
        ? chalk.greenBright("normal")
        : chalk.bold.redBright.underline("alta")
      }}
    {blue.bold Estado:}  ${
      task.done === true
        ? chalk.greenBright("completada ✔️")
        : chalk.bold.redBright("pendiente")
      }
    {blue.bold Engadida:} {blue ${task.added}}
    `);
  }
}

// Marcar como done as tasks feitas
async function makeDone(index, value) {
  let tasksList = await checkTasksList();
  tasksList.tasks[index].done = value;
  fs.writeFile(todoPath, JSON.stringify(tasksList));
  console.log(chalk`
    {blue.bold Nombre:} ${chalk.yellow.bold(tasksList.tasks[index].text)}
    {blue.bold Estado:}  ${
    tasksList.tasks[index].done === true
      ? chalk.greenBright("completada ✔️")
      : chalk.bold.magentaBright("pendiente")
    }
    `);
}

// Clean as tasks completadas
async function cleanDoneTasksList() {
  let tasksList = await checkTasksList();
  for (let i = tasksList.tasks.length - 1; i > 1; i--) {
    if (tasksList.tasks[i].done) {
      tasksList.tasks.splice(i, 1);
    }
  }
  fs.writeFile(todoPath, JSON.stringify(tasksList));
  console.log('Borraronse as tasks completadas')
}

if (list) {
  showTasksList();
} else if (done || done === 0) {
  makeDone(done, true);
} else if (undone || undone === 0) {
  makeDone(undone, false);
} else if (clean) {
  cleanDoneTasksList();
} else if (_.length > 1) {
  buildTask();
}






























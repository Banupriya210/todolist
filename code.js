var tasks=[{
    'task':"revising todays session",
    'status':true
},
{
    'task':"daily assessment",
    'status':false

},
{
    'task':"scope of work preparation",
    'status':true
}];
function add(tass1)
{
    var temp={
    'task':"tass1",
    'status':false
    }
    tasks.push(tass1);
    console.log(tasks);
}
function update(index)
{
    tasks[index].task= "travelling";
    tasks[index].status=true;
    console.log(tasks);
}

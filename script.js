const newTask = () => {
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => showTask(data));
}


const showTask = (data) => {
    const taskTitle = document.getElementsByClassName('task-title')[0];
    const sourceLink = document.getElementsByClassName('source-link')[0];

    taskTitle.innerText = data.activity;
    switch (data.link !== undefined && data.link !== '') {
        case true:
            sourceLink.style.display = 'block';
            sourceLink.href = data.link;
            break;
        case false:
            sourceLink.style.display = 'none';
            break;
    };
    console.log(data.link);
};
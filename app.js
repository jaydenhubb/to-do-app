const add = document.querySelector('.add')

const parent = document.querySelector('')

const addTemplate = todo => {
    const html = `
        <div class="check-box">
            <div class="check"></div>
        </div>
        <div class="todo-1">
            <form class="add"><input type="text" placeholder="create a new todo..." name="input">${todo}</form>
        </div>`;
    parent.innerHTML += html;
}



add.addEventListener('submit', e => {
    e.preventDefault()

    let todo = add.input.value.trim()
    // console.log(todo);
    addTemplate(todo)
})
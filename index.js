const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    console.log(placeholder)
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    // console.log("start", event.target)
    event.target.classList.add('hold')
    //эта функция скрывает видимость элемента в колонке при начала перетаскивания карточки
    setTimeout(() => event.target.classList.add('hide'), 0)
      
}

function dragend(event) {
    // console.log("end")
    // event.target.classList.remove("hold", "hide")
    event.target.className = 'item'
   
}

function dragover(event) {
    // console.log(dragover)
    event.preventDefault()
}

function dragenter(event) {
    console.log(dragenter)
    event.target.classList.add('hovered')
}

function dragleave(event) {
    // console.log(dragleave)
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    // console.log(dragdrop)
    event.target.classList.remove('hovered')
    event.target.append(item)
}
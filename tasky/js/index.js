const state = {
  taskList: [],
};

// DOM - document Object

const taskContent = document.querySelector(".task_content");
const taskModal = document.querySelector(".modal_task_body");

const htmlTaskContent = ({id, title, description, type, url}) => {
  console.log(id,title,description,type,url)
  return `
  <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
    <div class='card shadow-sm task__card'>
        <div class='card-header d-flex justify-content-end task__card__header'>
        <button type="button" class="btn btn-outline-info"><i class='fas fa-pencil' name=${id}></i></button>
        <button type="button" class="btn btn-outline-danger"><i class='fas fa-trash' name=${id}></i></button>
        </div>
        <div class='card-body'>
            ${
                url ? `<img width='100%' height='150px' style='object-fit:cover;object-position:center' src=${url} alt='card image' class='card-image/>` :
                `<img width='100%' height='150px' style='object-fit:cover;object-position:center' src="https://static.thenounproject.com/png/2024099-200.png" alt='card image' class='card-image'/>`

            }
            <h4 class='task__card__title'>${title}</h4>
            <p class='description text-muted' data-gram_editor='false'>${description}</p>
              <div class='tags text-white d-flex flex-wrap'>
                <span class='badge bg-primary m-1'>${type}</span>
              </div>
        </div>
        <div class='card-footer'>
            <button class='btn btn-outline-primary float-right'
                    data-bs-toggle='modal'
                    data-bs-target='#showTask'
                    id=${id}
                    onClick='openTask.apply(this,arguments)'
            >
            Open Task
            </button>
        </div>
    </div>
  </div>

  `;
};
const htmlModalContent= ({id, title, description, url}) => {
  const date=new Date()
  return `
    <div id=${id}>
      ${
        url ? `
        <img width='100%' src=${url} alt='card image cap' class='img-fluid place__holder__image mb-3' />
        `
          : `
        <img width='100%' src="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png" alt='card image cap' class='img-fluid place__holder__image mb-3' />
        `
      }
      <strong class='text-sm text-muted'>Created on ${date.toDateString()}</strong>
      <h2 class='my-3'>${title}</h2>
      <p class='lead'>${description}</p>
    </div>
  `
};
const updateLocalStorage= () => {
  localStorage.setItem(
    "tasks",
    JSON.stringify({
      tasks: state.taskList,
    })
  );
}
const loadInitialData = () => {
  const localStorageCopy = JSON.parse(localStorage.tasks);
  
  if (localStorageCopy) state.taskList = localStorageCopy.tasks;
  console.log("onnudi",state.taskList,"rendudi", localStorageCopy.tasks);
  state.taskList.map((cardDate) => {
    taskContent.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate));
  });

}
const handleSubmit = (event) => {
  const id = Date.now();
  console.log(id)
  const input = {
    url: document.getElementById("imageURL").value,
    title: document.getElementById("taskTitle").value,
    description: document.getElementById("taskDescription").value,
    type: document.getElementById("taskType").value,
  }
  if (input.title === '' || input.description ==='' || input.type ===''){
    return alert("Please Fill the fields");
  }
  taskContent.insertAdjacentHTML(
    'beforeend',
    htmlTaskContent(id,input.description,input.type,input.url)
    )
    console.log("submitted")
  state.taskList.push({...input,id})
  console.log(state.taskList)
  updateLocalStorage();

}
const openTask = (e) =>{
  if (!e) e = window.event;

  const getTask = state.taskList.find(( {id} ) => id === e.target.id)
  taskModal.innerHTML = htmlModalContent(getTask);

}

var easy = document.getElementById("dummy-container");
// easy.insertAdjacentHTML("beforeend",htmlTaskContent(0,"Hello","world","wfoij","https://picsum/300/200.img"))
// easy.insertAdjacentHTML("beforeend",htmlTaskContent(0,"Hello","world","wfoij","https://picsum/300/200.img"))
// easy.insertAdjacentHTML("beforeend",htmlTaskContent(0,"Hello","world","wfoij","https://picsum/300/200.img"))
// easy.insertAdjacentHTML("beforeend",htmlTaskContent(0,"Hello","world","wfoij","https://picsum/300/200.img"))

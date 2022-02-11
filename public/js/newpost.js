const postHandler = async (event) => {
    event.preventDefault();
  
    const body = document.querySelector('#body').value.trim();
    const title = document.querySelector('#title').value.trim();
    const user_id = document.querySelector('#user_id').value;
    

  
    if (body && title && user_id) {
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({title, body, user_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // document.location.replace('/dashboard');
        document.location.reload(true);
      } else {
        alert('Failed to post comment.');
      }
    }
  };


const deleteButtons = document.getElementsByClassName('delete');
const deleteHandler = async (event) => {

  console.log(event.target.dataset.id);
  const response = await fetch(`/api/post/${event.target.dataset.id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    // document.location.replace('/dashboard');
    document.location.reload(true);
  } else {
    alert('Failed to delete comment.');
  }

}

document
  .querySelector('.post-form')
  .addEventListener('submit', postHandler);
  

for (let i of deleteButtons) {
  i.addEventListener('click', deleteHandler);
}
  
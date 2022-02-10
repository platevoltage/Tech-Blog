const commentHandler = async (event) => {
    event.preventDefault();
  
    const body = document.querySelector('#comment').value.trim();
    const user_id = document.querySelector('#user_id').value;
    const post_id = document.querySelector('#post_id').value;
  
    if (comment) {
      const response = await fetch('/api/post/comment/', {
        method: 'POST',
        body: JSON.stringify({ body, user_id, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
         document.location.reload();
      } else {
        alert('Failed to post comment.');
      }
    }
  };

  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentHandler);
  
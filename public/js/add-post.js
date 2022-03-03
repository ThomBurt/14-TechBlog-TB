const newPostHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const title = document.querySelector('#title-input').value.trim();
    const description = document.querySelector('#description-input').value.trim();
    const postId = event.target.getAttribute('post-id');
    console.log(`the ${title} and ${description}`);
  
    if (title && description) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed to post new post');
      }
    }
  };
  
  document
    .querySelector('.newpost-form')
    .addEventListener('click', newPostHandler);

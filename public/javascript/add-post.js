// async function newFormHandler(event) {
//     event.preventDefault();
  
//     const title = document.querySelector('#post-title').value;
//     const content = document.querySelector('#content').value;
  
//     const response = await fetch(`/api/posts`, {
//       method: 'POST',
//       body: JSON.stringify({
//         title,
//         content
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   };
  
// document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);


const newPostHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#content').value.trim();
  //const postId = event.target.getAttribute('post-id');
  console.log(`the ${title} and ${content}`);

  if (title && content) {

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert('Failed to post new post');
      
    }
  }
};

document.querySelector('#new-post-form').addEventListener('submit', newPostHandler);
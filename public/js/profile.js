const dailyFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const date = document.querySelector('#date').value.trim();
    const howManyCigs = document.querySelector('#howManyCigs').value.trim();
    const cravings = document.querySelector('#cravings').value.trim();
    const mood = document.querySelector('#mood').value.trim();
    const daysWithoutCigs = document.querySelector('#daysWithoutCigs').value.trim();
    const journalEntry = document.querySelector('#journalEntry').value.trim();
  
    if (date && howManyCigs && cravings && mood && daysWithoutCigs && journalEntry) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/journal/', {
        method: 'POST',
        body: JSON.stringify({date, howManyCigs, cravings,mood, daysWithoutCigs, journalEntry}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace(`/profile`);
      } else {
        alert(response.statusText);
      }
    }
};
  
const formButton = document.querySelector('.new-project-form')

formButton.addEventListener('submit', dailyFormHandler);
  
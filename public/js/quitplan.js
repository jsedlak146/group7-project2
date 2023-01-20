const quitPlanHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const howManyCigs = document.querySelector('#howManyCigs').value.trim();
    const timeSmoking = document.querySelector('#timeSmoking').value.trim();
    const cigPrice = document.querySelector('#cigPrice').value.trim();
    const whyQuit = document.querySelector('#whyQuit').value.trim();
    const triggers = document.querySelector('#triggers').value.trim();
  
    if (howManyCigs && timeSmoking && cigPrice && whyQuit && triggers) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/questionnaire/', {
        method: 'POST',
        body: JSON.stringify({howManyCigs, timeSmoking, cigPrice, whyQuit, triggers}),
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

document.addEventListener('DOMContentLoaded', () => {
    const formButton = document.querySelector('.form');
    formButton.addEventListener('submit', quitPlanHandler);
});
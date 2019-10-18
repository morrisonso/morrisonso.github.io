//contact page form
const mssgFeedback = () => {
    const userName = document.getElementById('name').value
    document.getElementById('feedback')
    .innerHTML = `Thank you for your message, ${userName}.`
  }
  
  document.getElementById('submitbttn').addEventListener('click', mssgFeedback)
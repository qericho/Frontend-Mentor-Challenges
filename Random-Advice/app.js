const advice = document.getElementById('advice');
const dice = document.getElementById('dice');
const index = document.getElementById('index');


async function getData() {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    console.log(data);
    index.textContent = `ADVICE #${data.id}`;
    advice.textContent = data.quote;
  } catch (error) {
    console.error('Error:', error);
  }
}


dice.addEventListener('click',() =>{
    getData()     
})
const jsonFilePath = './data.json';

async function displayData() {
  try {
    const response = await fetch(jsonFilePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const container = document.querySelector('.summary-items-container');

    data.forEach(item => {
      const summaryItemDiv = document.createElement('div');
      summaryItemDiv.classList.add('summary-item', item.category.toLowerCase());

      const itemCategoryDiv = document.createElement('div');
      itemCategoryDiv.classList.add('item-category');

      const iconImg = document.createElement('img');
      iconImg.src = item.icon;
      iconImg.alt = `${item.category} icon`;

      const categorySpan = document.createElement('span');
      categorySpan.textContent = item.category;

      itemCategoryDiv.appendChild(iconImg);
      itemCategoryDiv.appendChild(categorySpan);

      const itemScoreDiv = document.createElement('div');
      itemScoreDiv.classList.add('item-score');
      itemScoreDiv.innerHTML = `<strong>${item.score}</strong> <span>/ 100</span>`;

      summaryItemDiv.appendChild(itemCategoryDiv);
      summaryItemDiv.appendChild(itemScoreDiv);

      container.appendChild(summaryItemDiv);
    });

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

displayData();
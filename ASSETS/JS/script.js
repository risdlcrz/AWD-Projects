fetch('./projects.json')
    .then(response => response.json())
    .then(projects => {
        const grid = document.querySelector('.category-grid');
        projects.forEach(project => {
            const item = document.createElement('div');
            item.className = 'category-item';
            item.dataset.href = project.href;

            const defaultImg = document.createElement('img');
            defaultImg.src = './ASSETS/screen.png';
            defaultImg.alt = project.name;
            item.appendChild(defaultImg);

            const hoverImg = document.createElement('img');
            hoverImg.src = project.thumbnail;
            hoverImg.alt = `${project.name} Hover`;
            hoverImg.className = 'category-image-hover';
            item.appendChild(hoverImg);

            const title = document.createElement('div');
            title.className = 'category-title';
            title.textContent = project.name;
            item.appendChild(title);

            const description = document.createElement('div');
            description.className = 'category-description';
            description.textContent = project.description;
            item.appendChild(description);

            item.addEventListener('click', () => {
                window.location.href = item.dataset.href;
            });

            grid.appendChild(item);
        });
    })
    .catch(error => console.error('Error fetching projects.json:', error));
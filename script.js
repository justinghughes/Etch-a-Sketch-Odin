const gridContainer = document.getElementById('grid-container');
        const button = document.querySelector('button');
        button.addEventListener('click', () => {
        createGrid();
    });
        const resetBtn = document.querySelector('#reset');
        resetBtn.addEventListener('click', () => {
            clearGrid();
        });

        function clearGrid() {
            gridContainer.innerHTML = '';
        }

    function createGrid() {
        const userSelection = prompt("Choose a grid size from 1-100");
        let squareSize = (parseInt("800px".replace(/px/,""))/userSelection)+"px";
        const gridArea = userSelection * userSelection;
        for (let i = 0; i < gridArea; i++) {
            if (gridArea > 10000) {
                return createGrid();
            } else if (gridArea <= 10000) {
                let newGrid = document.createElement('div');
                newGrid.classList.add('grid-item');
                gridContainer.appendChild(newGrid);
                newGrid.addEventListener('mouseover', () => {
                newGrid.style.backgroundColor = 'blue';
        })};
    };
        gridContainer.style.gridTemplateColumns = `repeat(${userSelection}, ${squareSize}`;
};
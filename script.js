const gridContainer = document.getElementById('grid-container');
const button = document.querySelector('button');
const colorSelector = document.getElementById('colors');
button.addEventListener('click', () => {
        gridContainer.innerHTML = '';
        createGrid();
    });
        const resetBtn = document.querySelector('#reset');
        resetBtn.addEventListener('click', () => {
            clearGrid();
        });

        function clearGrid() {
            gridContainer.style.gridTemplateColumns = null;
            createDefaultGrid();
            }
        
        

        const redBtn = document.querySelector('#red');
        const blueBtn = document.querySelector('#blue');

    function createDefaultGrid() {
        gridContainer.innerHTML = '';
        for (let i = 0; i < 256; i++) {
        let newGrid = document.createElement('div');
                newGrid.classList.add('grid-item');
                gridContainer.appendChild(newGrid);
        }
    }
    createDefaultGrid()
    function createGrid() {
        const userSelection = prompt("Choose a grid size from 1-100");
        let squareSize = (parseInt("700px".replace(/px/,""))/userSelection)+"px";
        const gridArea = userSelection * userSelection;
        for (let i = 0; i < gridArea; i++) {
            if (gridArea > 10000) {
                return createGrid();
            } else if (gridArea <= 10000) {
                let newGrid = document.createElement('div');
                newGrid.classList.add('grid-item');
                gridContainer.appendChild(newGrid);

                colorSelector.addEventListener('change', function() {
                    if (this.value == "placeholder") {
                        return null;
                    } else if (this.value == "red") {
                        redGrid();
                    } else {
                        blueGrid();
                    }
                });

                function redGrid() {
                newGrid.addEventListener('mouseover', () => {
                newGrid.style.backgroundColor = 'red';
                })};
            
                function blueGrid() {
                newGrid.addEventListener('mouseover', () => {
                newGrid.style.backgroundColor = 'blue';
                })}}};
                    
            gridContainer.style.gridTemplateColumns = `repeat(${userSelection}, ${squareSize}`;
            };
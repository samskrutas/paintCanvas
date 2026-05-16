const gridContainer = document.getElementById('pixel-grid');
const colorPicker = document.getElementById('colorPicker');

// Track live pointer states globally
let isDrawing = false;

document.body.onpointerdown = () => (isDrawing = true);
document.body.onpointerup = () => (isDrawing = false);

createGrid();

function createGrid() {
    gridContainer.innerHTML = ""; // Clear out previous assets
    
    // Build 400 separate responsive grid items (20 columns x 20 rows)
    for (let i = 0; i < 400; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        
        // Triggers color alteration if the mouse clicks down directly on a square unit
        cell.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            cell.style.backgroundColor = colorPicker.value;
        });

        // Triggers color alteration seamlessly if moving the cursor over cell boundaries while clicking
        cell.addEventListener('pointerenter', () => {
            if (isDrawing) {
                cell.style.backgroundColor = colorPicker.value;
            }
        });

        gridContainer.appendChild(cell);
    }
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#ffffff';
    });
}

document.getElementById("generateBtn").onclick = () => {
    var myNode = document.getElementById("container");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    var probNoDanger = document.getElementById("probNoDanger").value; 
    var probLowDanger = document.getElementById("probLowDanger").value; 
    var probMediumDanger = document.getElementById("probMediumDanger").value; 
    var probHighDanger = document.getElementById("probHighDanger").value; 
    var numberOfLanes = document.getElementById("numberOfLanes").value; 
    var numberOfRows = document.getElementById("numberOfRows").value;

    var probs = Object.assign({
        probNoDanger, 
        probLowDanger, 
        probMediumDanger, 
        probHighDanger, 
        numberOfLanes, 
        numberOfRows
    });

    calculateMap(probs);
}

const calculateMap = (probabilities) => {
    const {
        probNoDanger, 
        probLowDanger, 
        probMediumDanger, 
        probHighDanger,
        numberOfLanes, 
        numberOfRows
    } = probabilities;

    // Render rows and lanes 
    var container = document.getElementById("container"); 
    for (var rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
        var row = document.createElement("div"); 
        row.classList.add("row"); 

        for (var laneNumber = 0; laneNumber < numberOfLanes; laneNumber++) {
            var lane = document.createElement("div"); 
            lane.classList.add("cell"); 
            row.appendChild(lane); 
        }

        container.appendChild(row);        
    }

    // Color the lanes correctly 
    var allCells = Array.from(document.getElementsByClassName("cell")); 

    allCells.forEach(cell => {
        var randomNumber = Math.random(); 
    
        if (randomNumber < probNoDanger) {
            cell.style.backgroundColor = "lightblue"; 
        } else if (randomNumber < probLowDanger) {
            cell.style.backgroundColor = "yellow"; 
        } else if (randomNumber < probMediumDanger) {
            cell.style.backgroundColor = "orange"; 
        } else {
            cell.style.backgroundColor = "red"; 
        }
    });
}
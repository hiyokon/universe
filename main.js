$(document).ready(function init(){

    var graph = Object.create(UNIVERSE.graph);
     
    $('#EventsListener')
        .on('dblclick', addNode)
        .on('dragover', dragoverNode)
        .on('drop', dropMoveNode)
        ;
    var svg = document.getElementById('EdgesContainer');
    var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    var marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d',
                      'M ' +  0 +' '+  0
                    +' L ' + 10 +' '+  5
                    +' L ' +  0 +' '+ 10
                    +' z '
                    );
    marker.setAttribute('id', 'Triangle');
    marker.setAttribute('viewBox', '0 0 10 10');
    marker.setAttribute('refX', '1');
    marker.setAttribute('refY', '5');
    marker.setAttribute('markerWidth', '3');
    marker.setAttribute('markerHeight', '3');
    marker.setAttribute('orient', 'auto');
    marker.setAttribute('fill', 'rgba(102,051,000,0.9)');
    marker.setAttribute('stroke-width', '0');
    marker.appendChild(path);
    defs.appendChild(marker);
    svg.appendChild(defs);
     
});

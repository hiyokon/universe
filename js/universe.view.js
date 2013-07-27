// The Good Parts

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

//
// graph view
//

var drawNode = function () {
    var node_id = $.now();
    graph.setNode(node_id);
    var node = graph.getNode(node_id);
};
function addNode(){
    var x = event.pageX - 20;
    var y = event.pageY - 20;
    var newNode = $('<div>')
        .attr('id', $.now())
        .addClass('SpeechBalloon')
      //.attr('draggable', true)
        .attr('contenteditable', true)
        .css({left: x + 'px', top: y + 'px'})
      //.on('click', function(){ $(this).focus(); })
        .on('click', function(){
          //$(this).attr('draggable', false);
            $(this).attr('contenteditable', true);
            })
        .on('blur', function(){
          //$(this).attr('draggable', true);
            $(this).attr('contenteditable', false);
            })
        .on('dragstart', dragstartGetNodeId)
        .on('dragover', dragoverNode)
        .on('drop', dropAddEdge)
        ;
        console.log($('#GraphContainer'));
    $('#NodesContainer').append(newNode);
}

function dragstartGetNodeId(){
    event.dataTransfer.setData('text/plain', event.target.id);
}

function interiorDivide(s, t, p){
    var r = Math.random();
    var w = 1 + (1 - 2 * Math.random()) * p;
    return ((1-r)*s+r*t)*w;
}

function dropAddEdge(){
    var source  = $('#' + event.dataTransfer.getData('text/plain'));
    var sourceX = source.css('left').match(/\d+/)*1 + 20;
    var sourceY = source.css('top' ).match(/\d+/)*1 + 20;
    var targetX = event.target.style.left.match(/\d+/)*1 + 20;
    var targetY = event.target.style.top.match(/\d+/) *1 + 20;
    var bezierX = interiorDivide(sourceX,targetX,0.2);
    var bezierY = interiorDivide(sourceY,targetY,0.2);
    var newEdge = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    newEdge.setAttribute('id', $.now());
    newEdge.setAttribute('class', 'Edge');
    newEdge.setAttribute('d',
                      'M ' + sourceX +' '+ sourceY
                    +' Q ' + bezierX +' '+ bezierY
                    + ' '  + targetX +' '+ targetY
                    );
    newEdge.addEventListener('click', function () { alert('click!');}, false);
//  newEdge.addEventListener('dragstart', dragstartGetNodeId, false);
//  newEdge.addEventListener('dragover', dragoverNode, false);
//  newEdge.addEventListener('drop', dropMoveNode, false);
    $('#EdgesContainer').append(newEdge);
}
function dragoverNode(){
    event.preventDefault();
}

function dropMoveNode(){
    var x = event.pageX - 20;
    var y = event.pageY - 20;
    $('#' + event.dataTransfer.getData('text/plain'))
        .css({left: x + 'px', top: y + 'px'});
    event.preventDefault();
}

function getStyleObject(element){
    return _(element.getAttribute('style').replace(/\s/g, '').split(';'))
            .chain()
            .initial()
            .map(function(str){ return str.split(':'); })
            .object()
            .value();
}

function moveNode(){
    var node = document.getElementById('node0001');
    var nodePos = getStyleObject(node);
    var nodePosX = nodePos['left'];
    var nodePosY = nodePos['top'];
    console.log(nodePos);
}

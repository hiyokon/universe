var UNIVERSE = {};

//
// graph model
//

UNIVERSE.graph = {
    nodes : {},
    edges : {}
};
UNIVERSE.node = {
    id : '',
    value : {},
    edges_in : [],
    edges_out : [],
    hasEdge : function () {
        !_(this.edges_in).isEmpty() || !_(this.edges_out).isEmpty();
    },
    hasValue : function () {
        !_(this.value).isEmpty();
    },
//  setEdge:,
//  setValue: ,
};
UNIVERSE.edge = {
    id : '',
    value : {},
    source : '',
    target : '',
    hasSource : function () {
        return this.source ? true : false;
    },
    hasTarget : function () {
        return this.target ? true : false;
    },
    hasNode: function () {
        return this.hasSource || this.hasTarget;
    },
    hasValue : function () {
        return this.value ? true : false;
    },
    hasSource : function () {
        return this.source ? true : false;
    },
    hasTarget : function () {
        return this.target ? true : false;
    },
    hasNode: function () {
        return this.hasSource || this.hasTarget;
    },
    hasValue : function () {
        return Object.keys(this.value).length ? true : false;
    }
};
UNIVERSE.graph.hasNode = function () {
    return Object.keys(this.nodes).length ? true : false;
};
UNIVERSE.graph.hasEdge = function () {
    return Object.keys(this.edges).length ? true : false;
};
UNIVERSE.graph.setNode = function (node_id) {
    var node = Object.create(UNIVERSE.graph.node);
    this.nodes[node_id] = node;
};
UNIVERSE.graph.setEdge = function () {
    this.edges[edge_id] = edge;
};
UNIVERSE.graph.getNode = function (node_id) {
    return this.nodes[node_id];
};
UNIVERSE.graph.getEdge = function (edge_id) {
    return this.edges[edge_id];
};
UNIVERSE.graph.removeNode = function (node_id) {
    delete this.nodes[node_id];
};
UNIVERSE.graph.removeEdge = function (edge_id) {
    delete this.edges[edge_id];
};

//  UNIVERSE.graph.node.isEmpty = function () {
//      return Object.keys(this).length ? true : false;
//  };


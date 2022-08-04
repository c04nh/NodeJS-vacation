let ksk = {};
ksk.add = function(a, b){
    return a + b;
}

ksk.mul = function(a, b){
    return a * b;
}

ksk.sub = function(a, b){
    return a - b;
}

ksk.mod = function(a, b){
    return a % b;
}

module.exports = ksk;
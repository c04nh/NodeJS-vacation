let dummyDB = {};
let storage = [];
let count = 1;

dummyDB.get = function(id){
    if(id){
        id = (typeof id == 'string') ? Number(id) : id;
        for(let i in storage){
            if(storage[i].id == id){
                return storage[i];
            }
        }
    }else{
        return storage;
    }
};

dummyDB.insert = function(data){
    data.id = count++;
    storage.push(data);
    return data;
}

dummyDB.remove = function(id){
    id = (typeof id == 'string') ? Number(id) : id;
    for(let i in storage){
        if(storage[i].id == id){
            storage.splice(i, 1);
            return true;
        }
    }
}

module.exports = dummyDB;
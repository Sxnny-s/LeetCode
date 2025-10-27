# You’re working on a system that tracks the inventory for a pool of body cameras that officers are using. you need to set up three API’s where one takes a random ID out of the pool when an officer picks up a body camera at the beginning of the shift. One where the ID is placed back into the pool at the end of an officer shift and one that gets a random ID from the pool. Let’s let integers represent the ids.
# These APIs need to work closely together and be able to overlap as offices shifts may overlap they should be for a system with thousands of IDs so we want to keep a time complexity of O(1) for all three functions.

import random

class BodyCamPool:
    def __init__(self):
        # Initialize your data structure here
        # # map {
        #  0:1 
        #  1:2
        # #}
        
        inven = {}
        arr = []
        
        self.arr = arr
        self.count = count 
        self.inven = inven
        
        pass

    def insert(self, id):
        """
        If the id was inserted, return True. 
        If it was already present, return False.
        """
        
        if id in self.inven:
            return False
        else:
            self.inven[id] = len(self.arr)
            self.arr.append(id)
            return True
       

    def remove(self, id):
        """
        If the id was removed, return True. 
        If it was not present, return False. good
        """
        if id not in self.inven:
            return False
        else:
            self.inven[id] = len(self.arr)
            self.arr.append(id)
            return True
        pass
        

    def get_random(self):
        """
        Return a random id from the pool.
        """
        # 0 - len(ids)
        if self.inven:
            return random.choice(self.inven)
            
        pass



 class CameraPool {
  constructor() {
    this.valArr = [];           // values --- I only founnd it possible to do with the array but I'm open to hearing if it's possible with just a map
    this.pool = new Map();    // val -> index in valArr
  }

  // O(1) average
  # arr = [1,2,3 4,4]
  # map = {1:0, 2:1 ,3:2, 4:3,2}
  insert(id) {
    if (this.pool.has(id)) return false;
    this.pool.set(id, this.valArr.length);
    this.valArr.push(id);
    return true;
  }

  // O(1) average
  remove(id) {
    if (!this.pool.has(id)) return false;
    # remove 3
    const idx = this.pool.get(id);
    # 2
    const lastIdx = this.valArr.length - 1;
    # 3 
    const lastVal = this.valArr[lastIdx];
    # 4

    // move last to idx
    # find val to remove O(1)
    this.valArr[idx] = lastVal;
    # 3
    this.pool.set(lastVal, idx);
    # 4:3

    // remove last
    this.valArr.pop();
    this.pool.delete(id);

  // all good so
    return true;
  }

  // O(1)
  getRandom() {
    if (this.valArr.length == 0) return undefined; // or throw
    const r = Math.floor(Math.random() * this.valArr.length);
    return this.valArr[r];
  }
} 
// all O(1) through simple array and map manipulation 
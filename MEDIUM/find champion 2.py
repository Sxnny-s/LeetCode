class Solution:
    def findChampion(self, n: int, edges: List[List[int]]) -> int:
        opt = []

        for i in range(n):
            opt.append(i)

        weak = []


        for s, w in edges:
            weak.append(w)

        res = [e for e in opt if e not in weak]


        if len(res) == 1: 
           return res[0]
        else:
            return -1

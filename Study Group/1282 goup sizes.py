class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        
        Map = defaultdict(list)

        for i in range(len(groupSizes)):
            Map[groupSizes[i]].append(i)

        res = []

        for key in Map:

            while Map[key]:
                temp = []
                while len(temp) < key:
                    num = Map[key].pop()
                    temp.append(num)

                res.append(temp)

        return res
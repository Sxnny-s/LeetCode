class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        def back(start,combo,rt):
            if rt < 0: return
            if rt == 0: 
                res.append(combo[:])
                return

            for i in range(start,len(candidates)):
                combo.append(candidates[i])
                back(i,combo, rt - candidates[i])
                combo.pop()

        back(0,[],target)
        return res
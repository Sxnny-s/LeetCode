class Solution:
    def findChampion(self, grid: List[List[int]]) -> int:
        
        n = len(grid)
        res = 0 
        for i in range(n):
            
            champ = True
            
            for j in range(n):
                
                if i == j: continue 
                
                if grid[i][j] != 1:
                    champ = False
                
            
            if champ: 
                return i
            
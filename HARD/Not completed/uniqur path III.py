class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        
        res = 0
        direct = [(0,1),(1,0),(-1,0),(0,-1)]
        rows = len(grid)
        cols = len(grid[0])
        
        zero = 0 
        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 0: zero += 1
                if grid[row][col] == 1: start = (row, col)
                if grid[row][col] == 2: goal = (row, col)
              
        def dfs(row,col,seen):
            nonlocal res
            if grid[row][col] == 2 and len(seen) == zero + 2:
                #print(seen)
                res += 1
                return
                
            for r,c in direct:
                nr = r + row
                nc = c + col
                
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] != -1 and (nr,nc) not in seen:
                    
                    dfs(nr,nc, seen | {(nr,nc)})
                    
                        
            
        dfs(start[0], start[1], {start})
    
        return res
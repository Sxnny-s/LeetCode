

def police(s):
    res = 0
    seen = set()
    
    def helper(i,r):
        res = 0
        
        # foward
        if i != len(s) - 1:
            for i in range(i + 1, r + i):
                
                if i >= len(s):
                    break
                
                if i not in seen:
                    if s[i] == 'X':
                        res += 1
                        seen.add(i)
            
        # backward
        if i != 0:
            #[1,2,3] i = 1
            for i in range(i - 1, -1,-1):
                
                if i not in seen:
                    if s[i] == 'X':
                        res += 1
                        seen.add(i)
        
        print(s,res)  
        return res
    
    for i in range(len(s)):
        
        if s[i] in ['1','2','4','5','6','7','8','9']:
            res += helper(i,int(s[i]))
            
            
    return res
#  X1X#2X#XX
    
print(police("X#X1#X9XX"))
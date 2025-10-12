class Solution:
    def isValid(self, s: str) -> bool:
        

        stack = []

        key = {
            ")":'(',
            "}":'{',
            "]":'['
        }
        
        for c in s:

            if c in '[({':
                stack.append(c)

            if c in '])}':

                if not stack: return False

                if stack and stack[-1] == key[c]:
                    stack.pop()
                else: return False



        return len(stack) == 0
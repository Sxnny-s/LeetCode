class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        
        incoming = set()

        for _,c in edges:
            incoming.add(c)

        return [e for e in range(n) if e not in incoming]

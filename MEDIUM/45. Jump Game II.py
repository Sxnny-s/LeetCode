class Solution:
    def jump(self, nums: List[int]) -> int:
        l = 0
        r = 0
        count = 0
        goal = len(nums) - 1

        while r < goal:
            far = 0
            for i in range(l,r + 1):
                far = max(nums[i] + i, far)

            l = r + 1
            r = far 
            count += 1

        return count
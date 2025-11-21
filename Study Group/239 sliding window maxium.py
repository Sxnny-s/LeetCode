class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:

        res = []                 # This will store the maximum for each window
        q = deque([])            # Deque will store INDICES of elements (not values)

        for i in range(len(nums)):

            # 1. Remove indices that fall out of the current window
            # Window covers indices from (i - (k - 1)) to i
            while q and q[0] < i - (k - 1):
                q.popleft()

            # 2. Maintain a MONOTONIC DECREASING deque
            # Pop from the back while current number is greater than nums[q[-1]]
            # Because smaller elements are useless — they can never be max again
            while q and nums[q[-1]] < nums[i]:
                q.pop()

            # 3. Add current index to the deque
            q.append(i)

            # 4. When we've processed at least k elements, record the max
            # The max is ALWAYS at the front of the deque
            if i - (k - 1) >= 0:
                res.append(nums[q[0]])

        return res

# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The formula would be T(nlogn) because the class priorityQueue works like a recursive call and runs through the number of nodes once and since it sorts the nodes if the order isnt right it goes through the remaining nodes in the queue. The call to Dijkstra will run through all the nodes once and checks all the edges so you add on n^2. Dijkstra gets called twice so we get 2(T(nlogn)+n^2) and finally it runs through each node checking distance once so we add another n to get 2(T(nlogn)+n^2) + n. When you solve it you get 2T(nlogn) for run time.


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

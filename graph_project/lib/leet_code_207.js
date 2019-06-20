// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

var canFinish = function(numCourses, prerequisites) {
  let graph = createGraph(prerequisites);
  let totalCourses = Object.keys(graph).length;
  let completed = new Set();
  let eligibleCourseExists = true;

  while (eligibleCourseExists) {
    eligibleCourseExists = false;

    for (let course in graph) {
      let everyPreBeenMet = graph[course].every(pre => completed.has(pre));

      if (!completed.has(course) && everyPreBeenMet) {
        completed.add(course);
        eligibleCourseExists = true;
      }
    }
  }
  return completed.size === totalCourses;
};

function createGraph(prerequisites) {
  const graph = {};

  prerequisites.forEach(prereq => {
    [course, pre] = prereq.map(String);

    if (course in graph) {
      graph[course].push(pre);
    } else {
      graph[course] = [pre];
    }

    if (!(pre in graph)) {
      graph[pre] = [];
    }
  });
  return graph;
}
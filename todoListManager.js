const todoListManager = {
  tasks: [],

  // Add a new task
  add(task) {
    if (task) {
      this.tasks.push(task);
      console.log(`✅ Added task: "${task}"`);
    } else {
      console.log("⚠ Please provide a task.");
    }
  },

  // Delete a task by index
  delete(index) {
    if (this.tasks.length === 0) {
      console.log("⚠ No tasks to delete.");
      return;
    }
    if (index >= 0 && index < this.tasks.length) {
      const removed = this.tasks.splice(index, 1);
      console.log(`🗑 Deleted task: "${removed[0]}"`);
    } else {
      console.log("⚠ Please provide a valid task index.");
    }
  },

  // Show all tasks
  list() {
    if (this.tasks.length === 0) {
      console.log("📋 No tasks available.");
    } else {
      console.log("📋 Your tasks:");
      this.tasks.forEach((task, i) => {
        console.log(`${i}: ${task}`);
      });
    }
  }
};

// Example calls so you see output when you open browser console
todoListManager.add("Finish homework");
todoListManager.add("Go to gym");
todoListManager.list();
todoListManager.delete(0);
todoListManager.list();

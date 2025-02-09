import os

# List to store tasks
tasks = []

# Function to load tasks from file
def load_tasks():
    if os.path.exists("tasks.txt"):
        with open("tasks.txt", "r") as file:
            for line in file:
                task_data = line.strip().split(",")
                task = {"description": task_data[0], "completed": task_data[1] == "True"}
                tasks.append(task)
        print("Tasks loaded from file.")
    else:
        print("No existing tasks found.")

# Function to save tasks to file
def save_tasks():
    with open("tasks.txt", "w") as file:
        for task in tasks:
            file.write(f"{task['description']},{task['completed']}\n")
    print("Tasks saved to file.")

# Function to add a task
def add_task():
    description = input("Enter the task description: ")
    task = {"description": description, "completed": False}
    tasks.append(task)
    print("Task added successfully!")

# Function to view tasks
def view_tasks():
    if not tasks:
        print("No tasks to show.")
        return
    print("\nTo-Do List:")
    for idx, task in enumerate(tasks, start=1):
        status = "Completed" if task["completed"] else "Incomplete"
        print(f"{idx}. {task['description']} - {status}")

# Function to mark task as complete or incomplete
def mark_task():
    view_tasks()
    try:
        task_number = int(input("Enter the task number to mark complete/incomplete: "))
        task = tasks[task_number - 1]
        task["completed"] = not task["completed"]
        status = "Completed" if task["completed"] else "Incomplete"
        print(f"Task '{task['description']}' marked as {status}.")
    except (IndexError, ValueError):
        print("Invalid task number.")

# Function to remove a task
def remove_task():
    view_tasks()
    try:
        task_number = int(input("Enter the task number to remove: "))
        task = tasks.pop(task_number - 1)
        print(f"Task '{task['description']}' removed.")
    except (IndexError, ValueError):
        print("Invalid task number.")

# Main menu function
def main():
    load_tasks()
    while True:
        print("\nTo-Do List Application")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Mark Task as Complete/Incomplete")
        print("4. Remove Task")
        print("5. Save and Exit")

        choice = input("Choose an option: ")

        if choice == "1":
            add_task()
        elif choice == "2":
            view_tasks()
        elif choice == "3":
            mark_task()
        elif choice == "4":
            remove_task()
        elif choice == "5":
            save_tasks()
            print("Exiting program.")
            break
        else:
            print("Invalid option. Please choose again.")

# Run the program
if __name__ == "__main__":
    main()

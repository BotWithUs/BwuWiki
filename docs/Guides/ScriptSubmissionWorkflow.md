# Script Submission Workflow

This document outlines the process for submitting changes to your scripts using feature branches and squashing commits. This ensures that your script reviewers can review all changes in a single, consolidated commit, improving the review process.

## Step-by-Step Workflow using Github Desktop (Recommended)

### Clone the Repository
1. Open **GitHub Desktop**.
2. Go to **File > Clone Repository**.
3. In the new window, select your repository from the list or enter the URL of the repository, then click **Clone**.

   This will create a local copy of the repository on your computer.

### Create a Feature Branch
1. In **GitHub Desktop**, go to the branch dropdown in the top middle of the window.
2. Click **New Branch**.
3. Give your branch a meaningful name that describes what you’re working on (e.g., `feature/your-feature-name`).
4. Click **Create Branch**.

   You’ve now created and switched to a new branch, isolating your changes from the `main` branch.

### Make Your Changes
Make the necessary changes to your scripts using your preferred editor or IDE. GitHub Desktop will automatically detect the changes.

### Commit Your Changes
1. Once you’ve made changes, go back to **GitHub Desktop** and select your repo.
2. In the bottom left corner, you’ll see a list of modified files. You can review the changes here.
3. Write a descriptive commit message in the **Summary** field, explaining what changes you made.
4. Click **Commit to feature/your-feature-name**.

   **If you make additional changes, repeat this step to commit them incrementally.**

### Squash Your Commits
Once you’ve completed all your changes and committed them, it’s time to squash your commits into a single commit.

1. In **GitHub Desktop**, click **Branch** in the top menu and choose **Rebase Current Branch**.
2. Select the `main` branch as the base to rebase against.
3. GitHub Desktop will prompt you with an option to squash your commits. Choose **Squash and Merge** or a similar option (depending on your version).
4. Confirm the squash and complete the rebase process.

   This will combine all your commits into a single commit, making it easier for the reviewer to see all your changes at once.

### Push the Feature Branch
1. In **GitHub Desktop**, click **Push Origin** in the top toolbar to push your feature branch and squashed commit to the remote repository.

### Merge the Feature Branch into `main`
Once you’ve pushed your feature branch, you can merge it into the `main` branch:

1. In **GitHub Desktop**, switch back to the `main` branch by selecting it from the branch dropdown.
2. Click **Fetch Origin** and **Pull** to ensure your `main` branch is up to date with the remote.
3. Click **Branch > Squash and Merge into Current Branch** from the top menu, then select your feature branch (e.g., `feature/your-feature-name`).
4. Click **Merge** to merge your changes into `main`.

5. After the merge, click **Push Origin** to push the updated `main` branch to the remote repository.

### Delete the Feature Branch (Optional)
Once your feature has been merged, you can delete the feature branch:

1. In **GitHub Desktop**, go to the branch dropdown and select **Delete Branch** from the options for your feature branch.
2. If you also want to delete the branch from the remote repository, open GitHub in your browser and go to the **Branches** section of your repository, then delete the feature branch there as well.


Following this workflow helps ensure that your reviewers can see all your changes in a single commit, making the review process smoother and more efficient.

If you have any questions or run into any issues, please reach out!

---

## Step-by-Step Workflow using Git CLI

### Clone the Repository
If you haven't already cloned your repository, you can do so using the following command:

```bash
git clone https://github.com/your-username/your-repo.git
```

Navigate into your project directory:

```bash
cd your-repo
```

### Create a Feature Branch
Before making any changes, create a new branch. This branch will house your changes while you work on them. Use a meaningful name that describes what you're working on:

```bash
git checkout -b feature/your-feature-name
```

This ensures your changes are isolated from the `main` branch until they are ready to be reviewed.

### Make Your Changes
Now that you're on your feature branch, make the necessary changes to your scripts. You can commit your work incrementally as you go:

```bash
git add .
git commit -m "A descriptive commit message"
```

Feel free to commit as often as needed while working on your feature.

### Squash Commits into One
Once you’ve completed your feature, you should squash your commits into a single commit to make it easier for the reviewer to see all the changes at once. To do this, follow these steps:

1. Start an interactive rebase from the first commit on your feature branch:
   ```bash
   git rebase -i main
   ```

2. This will open an editor with a list of your commits. For all commits except the first one, change the word `pick` to `squash` (or just `s`).

   Example:
   ```bash
   pick 1234567 First commit message
   squash 89abcdef Second commit message
   squash 0fedcba Third commit message
   ```

3. Save and close the editor. Git will squash the commits into one.

4. Another editor will open, allowing you to combine the commit messages into one. Write a clear message describing the changes you've made in the single commit.

5. Save and close the editor to complete the process.

### Push the Feature Branch
Push your squashed feature branch to your remote repository:

```bash
git push origin feature/your-feature-name
```

### Merge the Feature Branch into `main`
Once you have reviewed the changes yourself and are happy with them, merge the feature branch into `main`:

```bash
git checkout main
git pull origin main
git merge feature/your-feature-name
```

After merging, push the updated `main` branch:

```bash
git push origin main
```

### Delete the Feature Branch (Optional)
If you’re done with the feature branch, you can delete it to keep your repository clean:

```bash
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

---

## Summary of Commands

1. Create and switch to a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Add and commit your changes:
   ```bash
   git add .
   git commit -m "A descriptive commit message"
   ```

3. Squash your commits:
   ```bash
   git rebase -i main
   ```

4. Push your feature branch:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Merge your branch into `main`:
   ```bash
   git checkout main
   git pull origin main
   git merge feature/your-feature-name
   git push origin main
   ```

6. Delete the feature branch (optional):
   ```bash
   git branch -d feature/your-feature-name
   git push origin --delete feature/your-feature-name
   ```

---

Following this workflow helps ensure that your reviewers can see all your changes in a single commit, making the review process smoother and more efficient.

If you have any questions or run into any issues, please reach out!

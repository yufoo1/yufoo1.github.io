---
sidebar_position: 2
---
# Git Branch

## Branch Management

### Create New Branch

In Git, it keeps a special pointer called `HEAD` to record what branch you're currently on. You can create a new branch through `git branch <branch name>`. `git branch` only create a new branch and It won't switch to that branch. If you want to create a new branch and switch to it, you can use `git checkout -b <branch name>`.

What's more, `git switch <branch name>` will switch to an existing branch, `-c` option will create a new branch and switch to it. You can return to your previously checked out branch by `git switch -`.

### Switch Branch

To switch to an existing branch, you can use `git checkout <branch name>`. This command will do two things, move the `HEAD` pointer and revert the files in your working directory back to the snapshot the your target branch points to.

If your working directory or staging area has uncommitted changes that conflict with the branch you're checking out, Git won't let you switch branches.

### Merge Branch

Through `git merge <branch>`, you can merge the target branch to current branch. When you merge a branch that is directly ahead of the commit you're are ,it will show `fast-forward`. If the commit on the branch you're on isn't a direct ancestor of the branch you're merging in, Git will do a simple three-way merge, using the two snapshots pointed to by the branch tips and the common ancestor of the two. Occasionally, if changed the same part of the same file differently in two branches you're merging, Git won't be able to merge them automatically and cleanly and you need to resolve the conflict by yourself.

### Delete Branch

When you no longer need a branch that has been merged, you can delete it with `-d` option, like `git branch -d <branch>`. You can forcibly delete a branch whether it's merged or not with `-D` option.

### List Branches

`git branch` will help you get a simple listing of your current branches. To see the last commit of each branch, you can run it with `-v` option. `--merged` and `--no-merged` options can filter this list to branches that you have or have not yet merged into the branch you're currently on. 

### Change Branch Name

You can rename the branch locally with the `git branch --move <old name> <new name>`. To let others see it on the remote, you must push it: `git push --set-upstream origin <new name>`. `git push origin --delete <old name>` can delete the branch with bad name on the remote.

## Remote Branches

### List Remote Branches

To get a full list of remote references explicitly, you should use `git ls-remote <remote>` or `git remote show <remote>`. 

### Fetch Remote Branch

To synchronize your work with a given remote, you need run `git fetch <remote>`. Then, you will get `<remote>/<branch>` that you cannot modify, if you want to get your own branch based on the remote one, you can use `git checkout -b <branch> <remote>/<branch>` after you fetch the remote branch.

With `git fetch --all`, you can fetch from all your remotes.

### Push to Remote Branch

When you want to share a branch with others, you can use `git push <remote> <branch>`. If your local branch name is different from remote branch name, you can use `git push <remote> <local branch>:<remote branch>`.

### Track Remote Branch

If you're on a tracking branch and type `git pull`, Git will automatically knows which server to fetch from and which branch to merge in. When you clone a repository, it will generally create a `master` branch automatically that tracks `origin/master`.

Through `git checkout --track <remote>/<branch>`, which can be simplify to `git checkout <branch>`, you can set up a tracking branches. To set up a local branch with a different name than the remote branch, you can use `git checkout -b <local branch> <remote>/<remote branch>`.

If you already have a local branch and want to set it to a remote branch or change the upstream branch you're tracking, you can use `-u` or `--set-upstream-to` option to `git branch` to explicitly set it.

To see what tracking branches you have set up, you can use `git branch -vv`, which will list out your local branches with more information including what each branch is tracking and if your local branch is ahead, behind or both.

## Rebasing

### Basic Rebase

In Git, there are two ways to integrate changes from one branch to another, which are `merge` and `rebase`. To use `rebase`, you need switch to your target branch at first and then use `git rebase <base branch>`. After that, you can switch to the base branch and do a fast-forward merge.


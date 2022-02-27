
## Documentation to keep a record of used commands

### How this package was created

Command to initialize the react framework.

```
npx create-react-app fratellis-front
cd fratellis-front
```

Command to initialize git.

```
git init
```

Commands to add files to a commit.

```
# Show untracked files
git status
git add .
git commit -m "First commit"
```

Command to initialize origin.

```
git remote add origin https://github.com/Salomon-mtz/fratellis-front.git
```
 
Command to upload files.

```
git push origin master
```


## How to run the application

Start the webserver

```
npm start
```

## How to add bootstrap

```
npm install --save bootstrap
```

## How to register SSH key

```
ssh-keygen

Key saved in:
C:\Users\salom/.ssh/id_ed25519.pub

git remote rm origin

it remote add origin git@github.com:Salomon-mtz/fratellis-front.git

```

## How to clean repository files

```
git reset --hard
```

## How to erase not included files in the repository

```
git clean -df
```

## How to create a pull request

### Locate the branch

```
git branch
```

### Create new branch

```
git checkout -b "new branch name"
```

### Add files

```
git add . 
```

### Commit changes

```
git commit -m "" 
```

### Push changes to the new branch

```
git push origin "new branch name" 
```

### Open github url to create the pull request

```
Example:  Create a pull request for 'video' on GitHub by visiting: https://github.com/Salomon-mtz/fratellis-front/pull/new/video
```
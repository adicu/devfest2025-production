# Getting Started

1. Make sure you're on node v22.6.0.
2. Check with
```bash
node -v
```
3. Use [nvm](https://github.com/nvm-sh/nvm) to switch to the right version if needed.
4. Git clone and switch to a new branch. You can name it firstname-lastname. Like john-doe. See [Git Tips](#Git-Tips)
5. Install node packages.
```bash
npm install
```
6. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Developing
## Layout
- The website is laid out within src/app. globals.css, layout.tsx, and page.tsx (within src/app) control the whole website, so they generally shouldn't be modified.
- The components for the individual pages can be found within src/app/components.
- Within src/app/components, you will find: CalendarPage Header PolaroidsPage ComputerPage HomePage Sidebar.
- Each folder has files controlling each component.

## Git Tips
To switch to your own branch:
```bash
git checkout -b firstname-lastname
```
After making changes, stage your changes:
```bash
git add .
```
and commit:
```bash
git commit -m "Your commit message here"
```
Then push to your branch (not to main):
```bash
git push origin firstname-lastname
```

## Coding Tips
- Codeium and ChatGPT are your best friend. Copy and paste files. Use very detailed, specific prompts, and give as much context as possible. I don't reccommend sending screenshots of the figma... it's not very good at that.

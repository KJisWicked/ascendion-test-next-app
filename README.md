<p align="center">
  <a href="https://laravel.com" target="_blank">
    <img alt="Next.js logo" src="https://camo.githubusercontent.com/26d06a6572aa5d9ecdb699add71d40e57aefe8244c6306ba58a70aee6ad5123c/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67" height="128" data-canonical-src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" style="visibility:visible;max-width:100%;">
  </a>
</p>

# Ascendion Technical Asssessment NextJS App

This is a **[NextJS 15](https://nextjs.org)** project which is bootstrapped with:

- Husky Git Hooks + Lint Staged
- App Router
- ShadCN UI components

## Table of Contents

- [Ascendion Technical Asssessment NextJS App](#ascendion-technical-asssessment-nextjs-app)
  - [Table of Contents](#table-of-contents)
  - [Framework Specs](#framework-specs)
- [Getting Started](#getting-started)
  - [Pre-requisites](#pre-requisites)
  - [Setting up NVM](#setting-up-nvm)
    - [For Windows](#for-windows)
    - [For Unix Systems (Linux/Mac Terminal)](#for-unix-systems-linuxmac-terminal)
  - [Setting Up Project](#setting-up-project)
- [Accessing My Answers](#accessing-my-answers)
  - [Q1 - Adding Two Numbers](#q1---adding-two-numbers)
  - [Q2 - Desktop \& Mobile View Navbar](#q2---desktop--mobile-view-navbar)
  - [Q3 - Two Sum II](#q3---two-sum-ii)

## Framework Specs

- [React 19](https://react.dev/blog/2024/12/05/react-19)
- [NextJS 15.2.2](https://nextjs.org/)
- [Tailwind v3](https://v3.tailwindcss.com/)

# Getting Started

### Pre-requisites

You should install these before starting development:

1. [NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) (Node Version Manager) - **_use Node Version v22.13.1_**
2. [Yarn](https://www.npmjs.com/package/yarn) - For package managing as `yarn` is used instead of `npm`.
3. [VSCode](https://code.visualstudio.com/download) - Recommended Editor as we have formatted plugins configured. But if you insist, any editor of your choice.

## Setting up NVM

### For Windows

1. You are recommended to have Node installed at least version of 22 onwards in order to run the project. Otherwise download it [here](https://nodejs.org/en/download).

2. After you're done, you can skip to the _**Setting Up Project**_ section.

### For Unix Systems (Linux/Mac Terminal)

1. Run `nvm` installer:

> _This command will clone the nvm repository to a ~/.nvm directory on your device._

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

2. Update your device's profile config:

**Step 1 should automatically add the nvm config to your profile.**

- _If you're using `zsh`, that would be in `~/.zshrc`._
- _If you're using `bash`, that would be in `~/.bash_profile`._
- _or some other profile depending on your device._

_If it doesnt add automatically, you can add the nvm config manually by running:_

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

3. Restart your terminal or shell config: `source ~/.bashrc` or `source ~/.zshrc`

4. Verify `nvm` is running:

```
nvm -v
```

> _If it shows the version, then you're good to go._

5. Run the following to install targeted NodeJS version. We are using -> `22.13.1`

```
nvm install 22.13.1
nvm use 22.13.1
```

6. (Optional) - You can set it as the system's default else you are required to input `nvm use 22.13.1` at
   every terminal use if you have other Node versions installed.

```
nvm alias default 22.13.1
```

## Setting Up Project

1. `npm` is also installed together with its corresponding NodeJS version that you installed with `nvm`. But you can ignore this, as we are experimenting with using `yarn`.

2. Install dependencies:

```
yarn install
```

3. At last, start the project to start local development:

```
yarn dev
```

4. You should acces the project via `localhost:3000` by default otherwise, what your terminal indicates.

# Accessing My Answers

## Q1 - Adding Two Numbers

Access this via the url

```
localhost:3000/q1
```

## Q2 - Desktop & Mobile View Navbar

Access this via the url

```
localhost:3000/q2
```

## Q3 - Two Sum II

Access this via the url

```
localhost:3000/q3
```

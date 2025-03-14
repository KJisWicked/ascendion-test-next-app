<p align="center">
  <a href="https://laravel.com" target="_blank">
    <img alt="Next.js logo" src="https://camo.githubusercontent.com/26d06a6572aa5d9ecdb699add71d40e57aefe8244c6306ba58a70aee6ad5123c/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67" height="128" data-canonical-src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" style="visibility:visible;max-width:100%;">
  </a>
</p>

# NextJS 15 Starter Kit

This is a **[NextJS](https://nextjs.org)** project which is bootstrapped with:

- i18n Routing (Internationalization)
- Husky Git Hooks + Lint Staged
- Base File structure for modules
- Tanstack/React Query
- Prebuilt Sample Components: Generic Navbar, Mobile Navbar and Footer.

## Table of Contents

- [NextJS 15 Starter Kit](#nextjs-15-starter-kit)
  - [Table of Contents](#table-of-contents)
  - [Framework Specs](#framework-specs)
  - [Core 3rd Party Packages](#core-3rd-party-packages)
- [Getting Started](#getting-started)
  - [Pre-requisites](#pre-requisites)
  - [Setting up NVM](#setting-up-nvm)
    - [For Unix Systems (Linux/Mac Terminal)](#for-unix-systems-linuxmac-terminal)
  - [Choice of Editor (VSCode)](#choice-of-editor-vscode)

## Framework Specs

- [React 19](https://react.dev/blog/2024/12/05/react-19)
- [NextJS 15.2.2](https://nextjs.org/)
- [Tailwind v3](https://v3.tailwindcss.com/)

## Core 3rd Party Packages

This packages will be your main focus when working on this project.

- [shadcn/ui](https://ui.shadcn.com/) - For UI components
- [react-hook-forms](https://react-hook-form.com/) + [zod](https://zod.dev/) / [zod-form-data](https://www.remix-validated-form.io/zod-form-data) - For Form Validations

> _These are not mandatory but flexible if better libraries are found._

# Getting Started

### Pre-requisites

You should install these before starting development:

1. [NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) (Node Version Manager) - **_use Node Version v22.13.1_**
2. [Yarn](https://www.npmjs.com/package/yarn) - For package managing
3. [VSCode](https://code.visualstudio.com/download) - Recommended Editor as we have formatted plugins configured. But if you insist, any editor of your choice.

## Setting up NVM

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

7. `npm` is also installed together with its corresponding NodeJS version that you installed with `nvm`. But you can ignore this, as we are experimenting with using `yarn`.

8. Navigate to the `jfj-frontend` root project directory and run this to generate the env file for development:

```
cp .env.example .env
```

9. Install dependencies:

```
yarn install
```

10. At last, start the project to start local development:

```
yarn dev
```

11. Happy Coding!!!

## Choice of Editor (VSCode)

If you're using VSCode as your editor, you are recommended to install these plugins as we will enforce syntax formatting rules using ESLint and Prettier.

- ESLint
- Prettier - Code formatter
- Error Lens
- Better Comments
- Headwind (For Tailwind CSS formatting)
- Tailwind CSS IntelliSense
- HTML CSS Support
- DotENV

# Contributing to DevRhylme Foundation's New-Website

Welcome! We’re thrilled that you want to contribute to our Next.js project. DevRhylme Foundation is committed to building cutting-edge solutions in AI, computer vision, and Web3. Your contributions help us make this vision a reality!

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Development Setup](#development-setup)
  - [Prerequisites](#prerequisites)
  - [Getting the Sources](#getting-the-sources)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Project Locally](#running-the-project-locally)
  - [Testing the Application](#testing-the-application)
- [Submission Guidelines](#submission-guidelines)
  - [Submitting Issues](#submitting-issues)
  - [Submitting Pull Requests](#submitting-pull-requests)
  - [Reviewing Pull Requests](#reviewing-pull-requests)
- [Coding Standards](#coding-standards)
  - [Commit Message Guidelines](#commit-message-guidelines)
  - [Commit Message Header](#commit-message-header)
  - [Commit Message](#commit-message-body)
  - [Commit Message Footer](#commit-message-footer)

---

## <a name="code-of-conduct"></a> Code of Conduct

Please read and follow our [Code of Conduct](/CODE_OF_CONDUCT.md) to keep our community respectful and inclusive.

---

## <a name="development-setup"></a> Development Setup

### <a name="prerequisites"></a> Prerequisites

Before working on the repository, ensure you have the following installed:

- **Git**: [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- **Node.js**: Use the version specified in the `.nvmrc` file.
- **npm**: Comes bundled with Node.js.
- **Next.js**: No need for manual installation; it's part of the dependencies.

### <a name="getting-the-sources"></a> Getting the Sources

1. Fork the [main repository](https://github.com/DEVRhylme-Foundation/new-website).
2. Clone your fork and set up the upstream remote:

    ```bash
    # Clone your fork
    git clone git@github.com:<your-username>/new-website.git

    # Navigate into the project directory
    cd new-website

    # Add upstream remote
    git remote add upstream https://github.com/DEVRhylme-Foundation/new-website.git
    ```

3. Sync your local repo with the upstream `develop` branch before making changes:

    ```bash
    git fetch upstream
    git checkout develop
    git pull upstream develop
    ```

### <a name="installing-dependencies"></a> Installing Dependencies

Install the necessary npm modules:

```bash
npm install
```

### <a name="running-the-project-locally"></a> Running the Project Locally

Start the development server:

```bash
npm run dev
```

Access the project at `http://localhost:3000`.

### <a name="testing-the-application"></a> Testing the Application

Run all tests using the following command:

```bash
npm test
```

Note: Ensure you write tests for new features or fixes where applicable.

---

## <a name="submission-guidelines"></a> Submission Guidelines

### <a name="submitting-issues"></a> Submitting Issues

1. Search the [issue tracker](https://github.com/DEVRhylme-Foundation/new-website/issues) to ensure your issue hasn’t already been reported.
2. If reporting a bug, provide:
   - Steps to reproduce the issue.
   - Expected behavior.
   - Screenshots or logs (if applicable).
3. File issues using the available templates.

### <a name="submitting-pull-requests"></a> Submitting Pull Requests

1. Sync your fork with the upstream `develop` branch.
2. Create a new branch for your changes:

    ```bash
    git checkout -b <branch-name> develop
    ```

3. Make your changes and commit them using our [Commit Message Guidelines](#commit-message-guidelines).
4. Push your branch:

    ```bash
    git push origin <branch-name>
    ```

5. Open a pull request to the `develop` branch of the main repository.

---

### <a name="reviewing-pull-requests"></a> Reviewing Pull Requests

- Ensure your code adheres to the coding standards and passes all tests.
- Respond promptly to feedback during reviews.

---

## <a name="coding-standards"></a> Coding Standards

Follow these rules to ensure consistency:

- Write clean and modular code adhering to Next.js best practices.
- Use **ESLint** for linting; the configuration is included in the repository.
- Format your code using **Prettier**; the configuration is provided.
- Name components descriptively and keep file organization logical.

---

## <a name="commit-message-guidelines"></a> Commit Message Guidelines

We follow the **Conventional Commits** specification to ensure clarity and automation in our workflow.

### Commit Format

```
<type>(<scope>): <short summary>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```


The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of type "docs". When the body is present, it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.

#### <a name="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope:public|admin|core|ui|api|config|npm|pages|components|hooks|utils|...
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|style|test
```

### Examples

**Type** | Description
---------|------------
`feat`   | A new feature
`fix`    | A bug fix
`docs`   | Documentation updates
`style`  | Changes to formatting or code style (non-functional)
`test`   | Adding or updating tests
`build`  | Changes to build scripts or dependencies
`ci`     | Continuous integration changes
`refactor` | Code changes that neither fix a bug nor add a feature

**Scope**: Reflect the folder or feature impacted:
- `public`, `admin`, `pages`, `components`, `utils`, `hooks`, `config`, `api`, `npm`

There are currently a few exceptions to this rule:
**Type**            | Description
--------------------|------------
`packaging`     | used for changes that change the npm package layout in all of our packages, e.g. public path changes, package.json changes done to all packages, d.ts file/format changes, changes to bundles, etc.
`changelog`     | for updating the release notes in CHANGELOG.md
`none/empty string` | useful for style, test and refactor changes that are done across all packages (e.g. style: add missing semicolons)


#### Example Commit Messages

```plaintext
feat(pages): add landing page with responsive layout
fix(api): correct endpoint response for user data
docs: update contribution guide with testing instructions
```

---

### Footer

Include references to related issues or PRs:

```plaintext
Closes #123
Related to #456
```

For breaking changes:

```plaintext
BREAKING CHANGE: updated API endpoints. Update client integrations.
```

##### Summary

The summary contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end

#### <a name="commit-body"></a>Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making this change. You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

#### <a name="commit-footer"></a>Commit Message Footer

The footer can contain information about breaking changes and is also the place to reference GitHub issues and other PRs that this commit closes or is related to. For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>, Closes #<pr number>
```

Breaking Change section should start with the phrase `BREAKING CHANGE: ` followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

### Revert commits

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.

---

Thank you for contributing to DevRhylme Foundation's new-website project! 💻 🚀

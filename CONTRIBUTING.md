# Contributing

When contributing to this repository, please first pick an issue concerning the change you wish to make.
If no issue is already opened on the subject, please ask the Product Owner about it first. 

Please note we have a Code of Conduct, please follow it in all your interactions with the project.

## New branch convention

The branches `main` is protected, so if you need to do anything on the project, you need to do it on your own branch.

After picking an issue, you should create your new branch where you can do whatever you want on it.

From `main`, create a new branch following this convention for the branch name :

```
<type>/<issue-number>-<short summary>
```

List of possible `<type>`:
- *feat* : add a new feature
- *refactor* : redo/optimize an existing feature
- *chore* : anything related to orbiting project files (docs, ci, config)
- *fix* : correct an existing feature
- *hotfix* : correct an existing feature currently **in production** (need a release)

Examples:
```
feat/123-abc
refactor/388-de-f
chore/667-adad
fix/249-test
```

/!\ PSA: Do not forget to `yarn` before starting any development on a new branch.

## Merge Request process

When creating a new branch, please open up a new Merge Request (MR) immediatly related to it. It helps inform other developers that an issue has been taken and is being worked on.

A Merge Request should be considered ready to review when:

1. All development related to the scope of the issue is done and stable,
2. Unit tests have been implemented for any new feature,
3. Lint and tests pass,
4. Translations have been extracted and any new key translated,
5. Configuration files and templates have been updated and informed,
6. Branch has been rebased to origin `main` HEAD (do not forget to install any new needed dependency after),

If needed, update the `README.md` with details of changes to the interface : this includes new environment variables, exposed ports, useful file locations and container parameters.

## Conventional commits

The commit convention we use is a lightway version of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

The Conventional Commits specification is a lightweight convention on top of commit messages.  
It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.

The commit message should be structured as follows:
```
<type>: <description>

[optional body]
```

List of possible `<type>`:
- *feat* : add a new feature
- *refactor* : redo/optimize an existing feature
- *chore* : anything related to orbiting project files (versions, tasks, config)
- *fix* : correct an existing feature
- *test* : add or update unit or end-to-end tests
- *ci* : add or refactor automated CI steps
- *style* : add or update any CSS related thing
- *docs* : add or update documentation

/!\ PSA: `chore` and `fix` types are slightly different here comparing to branch naming convention

Respecting the Conventional Commits specification helps everyone in the team, by making more explicit changes to other developers or making it simple to extract a changelog for the new version.

## Code styling

The code styling we use is the [JavaScript Style Guide defined by Airbnb](https://github.com/airbnb/javascript/blob/master/README.md).

Almost all Airbnb rules will be checked when linting.

## Versioning

The versioning scheme we use is [SemVer](http://semver.org/).

Given a version number `MAJOR.MINOR.PATCH`, increment the:

- `MAJOR` version when you make incompatible or overall changes,
- `MINOR` version when you add functionality in a backwards compatible manner,
- `PATCH` version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the `MAJOR.MINOR.PATCH` format (`-ALPHA`, `-BETA`, `-NIGHTLY`, `-RC`)

## Code of Conduct

### Our Standards

Examples of behavior that contributes to creating a positive environment include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the team
* Showing empathy towards other team members

Examples of unacceptable behavior by participants include:

* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

### Our Responsibilities

Project Maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project Maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct.

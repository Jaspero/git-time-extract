# Git Time Extract

A tiny command line util for extracting and accumulating all commits with `time:`. 

## Installation

To install the library run:

```
npm i -g @jaspero/git-time-extract
```

## How to use

Somewhere in commits add `time: [number](h|hour|m|min|s|sec)`, for example `time: 5h` or `time: 43min`.
Then when calling `gte` you'll get sum of all the time spent. 

You can also use any `git log` filters such as:

```
--skip=<number>
--since=<date>
--after=<date>
--until=<date>
--before=<date>
--author=<pattern>
--committer=<pattern>
```

### Examples

Get the hours for a perticular author before yesterday
```
gte --author="filip" --before="yesterday"
```


Get the hours before a day
```
gte --before="2020-12-01"
```

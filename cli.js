#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var argv = require("minimist")(process.argv.slice(2));
var useNpm = require(".");

var message;
if (argv.f) {
  message = fs.readFileSync(argv.f, "utf8");
} else if (argv.m) {
  message = argv.m;
}

useNpm(message);

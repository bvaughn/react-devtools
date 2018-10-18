/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

function profile() {
  if (
    typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object' &&
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== null &&
    typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__.profile === 'function'
  ) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.profile();
  }
}

function profileEnd() {
  if (
    typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object' &&
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== null &&
    typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__.profileEnd === 'function'
  ) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.profileEnd();
  }
}

function profileEndAfterNextCommit() {
  if (
    typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object' &&
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== null &&
    typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__.profileEndAfterNextCommit === 'function'
  ) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.profileEndAfterNextCommit();
  }
}

function profileOneCommit() {
  if (
    typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object' &&
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== null &&
    typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__.profileOneCommit === 'function'
  ) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.profileOneCommit();
  }
}

module.exports = {
  profile,
  profileEnd,
  profileEndAfterNextCommit,
  profileOneCommit,
};

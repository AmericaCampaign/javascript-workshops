#!/usr/bin/env bash

if ! git config remote.upstream.url > /dev/null; then
  git remote add upstream https://github.com/AmericaCampaign/javascript-workshops.git
fi

DIR=`dirname "$0"`
cd ${DIR}/data-and-functions-1 && yarn install
cd ../data-and-functions-2 && yarn install
cd ../data-and-functions-3 && yarn install
cd ..

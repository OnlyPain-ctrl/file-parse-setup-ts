#!/usr/bin/env bash

new=$(ls -t ./data/old/ | head -1)

[ "$new" == "" ] && exit 0
[ -e ./data/old/"$new" ] || exit 0
cmp -s ./data/output.txt ./data/old/"$new" || exit 0

rm ./data/old/"$new"

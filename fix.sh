#!/bin/bash
for f in /Users/tranhatam/Documents/Devnewproject/muonnoi.org/plays/games/*/index.html; do
  sed -i '' 's/upđãte/update/g; s/đãta-/data-/g; s/seconđãry/secondary/g; s/đãrknet/darknet/g; s/đãtaset/dataset/g' "$f"
done
echo "done" > /Users/tranhatam/Documents/Devnewproject/muonnoi.org/fix-done.txt

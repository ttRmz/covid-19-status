ICONS=$(find ./src/assets/icons -type f -name '*.svg' | sed -e 's/^\.\/src\/icons\///' | sed -e 's/.*\///' | sed -e 's/\.svg//' | sort | uniq)
PATH=src/components/Icon/_internals/constants.js

echo '// This file is generated by build:icons script. Changes will be overridden.

export const ICONS = [' >$PATH

for icons in $ICONS
do
  echo "\"$icons\"," >>$PATH
done

echo '];' >>$PATH


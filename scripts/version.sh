PACKAGE_VERSION=$(node -p "require('./package.json').version")
sed -i '' -e "s~VUE_APP_VERSION=.*~VUE_APP_VERSION=\"$PACKAGE_VERSION\"~" .env && git add .env
echo "Updated .env variable VUE_APP_VERSION to \"$PACKAGE_VERSION\""
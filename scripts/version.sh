PACKAGE_VERSION=$(node -p "require('./package.json').version")
sed -i '' -e "s~VITE_APP_VERSION=.*~VITE_APP_VERSION=\"$PACKAGE_VERSION\"~" .env && git add .env
echo "Updated .env variable VITE_APP_VERSION to \"$PACKAGE_VERSION\""
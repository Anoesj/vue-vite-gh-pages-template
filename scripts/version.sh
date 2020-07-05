PACKAGE_VERSION=$(node -p "require('./package.json').version")
sed -i '' -e "s~VITE_VERSION=.*~VITE_VERSION=\"$PACKAGE_VERSION\"~" .env && git add .env
echo "Updated .env variable VITE_VERSION to \"$PACKAGE_VERSION\""
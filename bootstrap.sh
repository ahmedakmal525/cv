# Development Script.
# Building the image
echo "Building the project image 'portfolio-dev'"
docker build -t portfolio-dev .

# Running the container as a daemon
echo "Running the 'portfolio-dev' container"
docker run -dit -p 3000:3000 --name portfolio-dev portfolio-dev

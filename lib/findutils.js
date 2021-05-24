const pathResolve = require('path').resolve;

// Utility functions to check if the package exists
exports.findPackage = (package, isExit) => {
    try {
      return require(pathResolve(package));
    } catch (error) {
      console.error(`Can't load the package ! ${error}`);
      if (isExit) process.exit(1);
    }
};


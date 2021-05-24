// Utility functions to check if the package exists
const findPackage = (package) => {
    try {
      return require(package);
    } catch (error) {
      console.error(`Can't load the package ! ${error}`);
      process.exit(1);
    }
  };

export default findPackage;
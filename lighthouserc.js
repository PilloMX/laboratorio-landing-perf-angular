module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: ["http://localhost:8080"],
      numberOfRuns: 3,
      //chromePath: "CHROME_PATH",
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.50 }],
        "categories:accessibility": ["error", { minScore: 0.8 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.8 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};

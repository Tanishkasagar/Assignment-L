require("dotenv").config();

const configurations = {
  ConnectionStrings: {
    MongoDB: "mongodb+srv://user1:tanishka@cluster0.dnfsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  },
  Authentication: {
    Google: {
      ClientId: "562689562114-gmj0qo48f9nu32ersh2umattqna673rp.apps.googleusercontent.com",  // Replace with your actual Google Client ID
      ClientSecret: "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",  // Replace with your actual Google Client Secret
      CallbackUrl: "http://localhost:3000/google/callback",  // Your callback URL for Google
    },
  },
};

module.exports = configurations;

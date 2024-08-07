import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif|svg|riv)$/,
        type: "asset/resource", // Automatically handles file copying
        generator: {
          filename: "assets/[name][ext][query]", // Output path for assets
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"], // Add other extensions if needed
  },
  output: {
    path: path.resolve(__dirname, "dist"), // Ensure this matches your build output path
    filename: "bundle.js",
  },
};

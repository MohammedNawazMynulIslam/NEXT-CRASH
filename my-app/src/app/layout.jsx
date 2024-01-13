import "@styles/globals.css";

export const metadata = {
  title: "PromptHeaven",
  description: "Find thousands of news prompts under a single hood.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;

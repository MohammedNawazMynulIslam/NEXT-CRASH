import "@styles/globals.css";
import { Nav } from "@components/Nav";
import { Provider } from "@components/Provider";

export const metadata = {
  title: "PromptHeaven",
  description: "Find thousands of news prompts under a single hood.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;

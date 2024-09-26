import Footer from "./components/Footer";
import cs from "clsx";
import * as styles from "./module.app.css";

export default function App() {
  return (
    <main>
      <p
        className={cs(
          "m-10 text-red-500 font-bolder line-through text-3xl",
          styles.fromModule
        )}
      >
        App
      </p>
      <Footer />
    </main>
  );
}

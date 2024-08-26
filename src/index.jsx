import "./style.css";
import { hydrateRoot } from "preact/compat/client";

export function App() {
  return (
    <div class="homePage">
      
        <h1>It's a simple Preact testing project ¯\_(ツ)_/¯</h1>
		<ul>
        <Resource href="https://github.com/XAITYH"
		title="Just my GitHub (click me)"/>
		<Resource href="https://t.me/XAITYH"
		title="Just my Telegram (click me)"/>
		</ul>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="link">
		{props.title}
    </a>
  );
}

if (typeof window !== "undefined") {
  hydrateRoot(document.getElementById("app"), <App />);
}

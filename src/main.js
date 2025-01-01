import App from './App.svelte';
import './app.css';
import { mount } from 'svelte';
import katex from "katex";
import "katex/dist/katex.min.css"; 
import "./app.css"; 



const app = mount(App, { target: document.getElementById("app") });

export default app;

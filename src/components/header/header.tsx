import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="flex bg-white border-b-8 border-qwik-purple ">
      <div class="logo">
        <a class="logoa" href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul class="m-0 pl-0.5 pr-2.5 py-0 grow flex text-right justify-end">
        <li class="navli">
          <a class="nava" href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            Docs
          </a>
        </li>
        <li class="navli">
          <a class="nava" href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Examples
          </a>
        </li>
        <li class="navli">
          <a class="nava" href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});

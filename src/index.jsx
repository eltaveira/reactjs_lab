import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'src/Formularios/ValidandoFomulario/AppValidacaoForm.jsx';

// Métodos já utilizados
// CONSTANTES
// `React.version;` devolve versão do React.
// `React.StrictMode;` renderiza sempre duas vezes o componente, tanto na montagem atualização e desmontagem.
// `React.Fragment;` permite vários elementos HTML seja agrupados, o fragment não é inserido na DOM.

// FUNÇÕES
// `React.useState;` atribui estado a um componente, capaz de guarda qualquer tipo de objeto javascript.
// `React.useEffect;` executa um callback quando estados do componente são alterados, componente é montado ou desmontado.
// `React.useRef;` guarda referência de um objeto no componente. Seja esse objeto um elemento DOM HTML, ou qualquer objeto javascript.
// `React.useMemo;` memoriza a saída de uma função demorada que devolve sempre o mesmo valor, de forma que nas próximas renderizações do componente não demore o mesmo tempo de execução.
// `React.createContext` cria um novo contexto.
// `React.useId` gera IDs únicos para serem utilizados em elementos que dependem de vinculação, como label e input text.

const {
  // Constantes
  version,
  StrictMode,
  Fragment,

  // Funções
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  createContext,
  useContext,
  useId,

  // OBJETOS AINDA NÃO ESTUDADOS
  // Funções
  memo,
  useReducer,
  lazy,
  cloneElement,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  startTransition,
  useDebugValue,
  useDeferredValue,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useSyncExternalStore,
  useTransition,

  // Constantes
  Children,
  Suspense,
  Profiler,

  // Classes
  Component,
  PureComponent
} = React;

ReactDOM.createRoot(document.getElementById('root')).render(
  /**
   * O StrictMode sempre renderiza duas vezes.
   * Ou seja, componentes são renderizados duas vezes
   * e por tanto console.log() são exibidos duas vezes.
   *
   * Na versão de build, isso não irá acontecer.
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
